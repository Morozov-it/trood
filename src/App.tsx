import React from 'react'
import './styles/App.css'
import ProgressBar from './components/ProgressBar'
import Table from './components/Table'
import { BarItem } from './models'

const items: BarItem[] = [
  { name: 'Sold', color: '#BD1FBE', value: 677 },
  { name: 'Got free', color: '#FC64FF', value: 23 },
  { name: 'Burned', color: '#2bf135', value: 202 },
  { name: 'Free float', color: '#d7d8d7', value: 323 },
]

const App = () => {
  return (
    <div className="App">
      <ProgressBar items={items} width={10} height={20} />
      <Table />
    </div>
  );
}

export default App
