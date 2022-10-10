import React, { useState, useCallback, useMemo } from 'react'
import styles from './styles/App.module.scss'
import ProgressBar from './components/ProgressBar'
import Table from './components/Table'
import { Filters, Sort, TableItem } from './models'
import { tableItems, barItems } from './testData'
import { getFilteredData } from './utils/getFilteredData'
import { getSortedData } from './utils/getSortedData'
import { useData } from './utils/useData'

const App: React.FC = () => {
  //data
  const { data, loading, error } = useData<TableItem[]>(tableItems, 1000)

  //Filters & sortings
  const [filters, setFilters] = useState<Filters>({ status: null, type: null })
  const [sort, setSort] = useState<Sort | null>(null)
  const filteredData = useMemo(() => getFilteredData(filters, data), [data, filters])
  const sortedData = useMemo(() => getSortedData(sort, filteredData), [filteredData, sort])

  //Calbacks
  const onSort = useCallback((sort: Sort | null) => setSort(sort), [])
  const onFilter = useCallback((filters: Filters) => setFilters(filters), [])
  const onBuy = useCallback((id: number) => alert(`You've caught project with id = ${id}`), [])

  return (
    <main className={styles.app}>
      <ProgressBar items={barItems} width={10} height={20} />
      <Table
        loading={loading}
        items={sortedData}
        filters={filters}
        sort={sort}
        onFilter={onFilter}
        onSort={onSort}
        onBuy={onBuy}
      />
      {!!error && <h4 className={styles.error}>{JSON.stringify(error)}</h4>}
    </main>
  )
}

export default App
