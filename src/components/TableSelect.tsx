import React from 'react'
import { Filters } from '../models'
import styles from '../styles/TableSelect.module.scss'

interface Props {
    name: keyof Filters
    handleFilter: (name: keyof Filters, value: string) => void
    filter: string | null 
    catalog: string[]
}

const TableSelect: React.FC<Props> = ({ name, handleFilter, filter, catalog }) => {
    return (
        <select
            className={styles.select}
            onChange={(e) => handleFilter(name, e.target.value)}
            value={filter ?? 'all'}
        >
            <option value={'all'}>All</option>
            {catalog.map((opt, i) => (
                <option key={i} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    )
}

export default React.memo(TableSelect)