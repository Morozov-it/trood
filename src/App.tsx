import React, { useState, useCallback, useMemo } from 'react'
import './styles/App.css'
import ProgressBar from './components/ProgressBar'
import Table from './components/Table'
import { Filters, Sort,  } from './models'
import { tableItems, barItems } from './testData'
import { getFilteredData } from './utils/getFilteredData'
import { getSortedData } from './utils/getSortedData'

const App: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({ status: null, type: null })
  const [sort, setSort] = useState<Sort | null>(null)

  const onSort = useCallback((sort: Sort | null) => setSort(sort), [])
  const onFilter = useCallback((filters: Filters) => setFilters(filters), [])
  const onBuy = useCallback((id: number) => alert(`You've bought project with id = ${id}`), [])
  const sortedData = useMemo(() => getSortedData(sort, tableItems), [sort])
  const sortedAndFiteredData = useMemo(() => getFilteredData(filters, sortedData), [filters, sortedData])

  return (
    <div className="App">
      <ProgressBar items={barItems} width={10} height={20} />
      <Table
        items={sortedAndFiteredData}
        filters={filters}
        sort={sort}
        onFilter={onFilter}
        onSort={onSort}
        onBuy={onBuy}
      />
    </div>
  );
}

export default App
