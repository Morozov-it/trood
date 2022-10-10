import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './components/Project'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/project/:id' element={<Project />} />
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
)

