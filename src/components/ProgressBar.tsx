import React from 'react'
import { BarItem } from '../models'
import styles from '../styles/ProgressBar.module.scss'

interface Props {
    items: BarItem[]
    width: number
    height: number
}

const ProgressBar: React.FC<Props> = ({ items, width, height }) => {
    const total = items.reduce((acc, cur) => acc + cur.value, 0)

    return (
        <div className={styles.body}>
            <h2>Progress bar</h2>
            <div className={styles.barLine}>
                {items.map((item) => 
                    new Array(Math.floor(item.value / total * 100)).fill(0)
                        .map((_, i) => <div key={i} style={{ width, height, background: item.color }} className={styles.bar} />)
                )}
            </div>
            <div className={styles.barLegend}>
                {items.map((item) => (
                    <div className={styles.legend} key={item.name} >
                        <div className={styles.legendCircul} style={{ background: item.color }} />
                        <span>
                            {`${item.name}: ${item.value} (${(item.value / total * 100).toFixed(1)}%)`}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default React.memo(ProgressBar)