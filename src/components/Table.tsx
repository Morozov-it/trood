import React from 'react'
import { Filters, Sort, TableItem } from '../models'
import styles from '../styles/Table.module.css'
import { getBackColor } from '../utils/getBackColor'

interface Props {
    items: TableItem[]
    sort: Sort | null
    filters: Filters
    onSort: (sort: Sort | null) => void
    onFilter: (filters: Filters) => void
    onBuy: (id: number) => void
}

const Table: React.FC<Props> = ({ items, filters, sort, onSort, onFilter, onBuy }) => {
    return (
        <div className={styles.table}>
            <h2>Table</h2>
            <table>
                <thead className={styles.head}>
                    <tr>
                        <th>Project</th>
                        <th>Token type</th>
                        <th>Conditions</th>
                        <th>Volume</th>
                        <th>ROI</th>
                        <th>Free float</th>
                        <th>Insurance hedge</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className={styles.body}>
                    {items.map((item) => (
                        <tr key={item.id} className={styles.row} style={{ backgroundColor: getBackColor(item.status) }}>
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
                            <td><button>Buy</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(Table)