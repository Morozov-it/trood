import React from 'react'
import styles from '../styles/TableButton.module.scss'

interface Props {
    title: string
    onClick: () => void
}

const TableButton: React.FC<Props> = ({ title, onClick }) => {
    return (
        <button className={styles.button} onClick={(e) => {
            e.stopPropagation()
            onClick()
        }}>{title}</button>
    )
}

export default React.memo(TableButton)