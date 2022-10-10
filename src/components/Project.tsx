import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { TableItem } from '../models'
import { tableItem } from '../testData'
import { useData } from '../utils/useData'
import Spinner from './Spinner'
import styles from '../styles/App.module.scss'

const Project: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { data, loading, error } = useData<TableItem>(() => tableItem(Number(id)))

    return (
        <main className={styles.app}>
            <h1>Project Page</h1>
            <Link to='/'><button>&#8602; back</button></Link>
            <section>
                {loading
                    ? <Spinner />
                    : <pre>{JSON.stringify(data, null, 2)}</pre>
                }
                {!!error && <p className={styles.error}>{JSON.stringify(error)}</p>}
            </section>
        </main>
    )
}

export default Project