import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filters, Sort, TableItem } from '../models'
import styles from '../styles/Table.module.scss'
import { getBackColor } from '../utils/getBackColor'
import { getSortedArrows } from '../utils/getSortedArrows'
import Spinner from './Spinner'
import TableButton from './TableButton'
import TableSelect from './TableSelect'

interface Props {
    items: TableItem[]
    sort: Sort | null
    filters: Filters
    loading: boolean
    onSort: (sort: Sort | null) => void
    onFilter: (filters: Filters) => void
    onBuy: (id: number) => void
}

const Table: React.FC<Props> = ({ items, filters, sort, onSort, onFilter, onBuy, loading }) => {
    const navigate = useNavigate()

    const handleSort = useCallback((name: Sort | null) => {
        if (sort === name) {
            return onSort(`-${name}` as Sort)
        }
        if (sort === `-${name}`) {
            return onSort(null)
        }
        onSort(name)
    }, [onSort, sort])

    const handleFilter = useCallback((name: keyof Filters, value: string) => {
        onFilter({
            ...filters,
            [name]: value === 'all' ? null : value
        })
    }, [filters, onFilter])

    //better fetch those catalogs via props as enums
    const statuses = useMemo(() => ['red', 'green', 'yellow'], [])
    const types = useMemo(() => ['TRST', 'THT', 'THC'], [])

    return (
        <section className={styles.table}>
            <h2>Table</h2>
            <table>
                <thead className={styles.head}>
                    <tr>
                        <th>
                            <div className={styles.activeHead}>
                                <TableSelect
                                    name='status'
                                    catalog={statuses}
                                    filter={filters.status}
                                    handleFilter={handleFilter}
                                />
                                <div onClick={() => handleSort('name')}>
                                    Project
                                    {getSortedArrows(sort, 'name')}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.activeHead}>
                                <TableSelect
                                    name='type'
                                    catalog={types}
                                    filter={filters.type}
                                    handleFilter={handleFilter}
                                />
                                <div onClick={() => handleSort('type')}>
                                    Token type
                                    {getSortedArrows(sort, 'type')}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.activeHead}>
                                <div onClick={() => handleSort('conditions')}>
                                    Conditions
                                    {getSortedArrows(sort, 'conditions')}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className={styles.activeHead}>
                                <div onClick={() => handleSort('volume')}>
                                    Volume
                                    {getSortedArrows(sort, 'volume')}
                                </div>
                            </div>
                        </th>
                        <th>ROI</th>
                        <th>Free float</th>
                        <th>Insurance hedge</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {loading
                        ?<tr >
                            <td colSpan={8} className={styles.loading}><Spinner /></td>
                        </tr>
                        : items.length ?
                            items.map((item) => (
                                <tr
                                    key={item.id}
                                    className={styles.row}
                                    style={{ backgroundColor: getBackColor(item.status) }}
                                    onClick={() => navigate(`/project/${item.id}`)}
                                >
                                    <td>
                                        <span className={styles.statusCircul} style={{ background: item.status }} />
                                        <span>{item.name}</span>
                                    </td>
                                    <td>{item.type}</td>
                                    <td>{item.conditions}</td>
                                    <td>{'$' + item.volume.toLocaleString('ru')}</td>
                                    <td>{item.roi + '%'}</td>
                                    <td>{item.free}</td>
                                    <td>{item.hedge + '%'}</td>
                                    <td><TableButton title='Buy' onClick={() => onBuy(item.id)} /></td>
                                </tr>
                            ))
                            :<tr >
                                <td colSpan={8} className={styles.noData}>no data</td>
                            </tr>
                    }
                </tbody>
            </table>
        </section>
    )
}

export default React.memo(Table)