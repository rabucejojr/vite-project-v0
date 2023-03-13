import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, MenuBar } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route index="/" element={<div>Index Page</div>}/>
          <Route path='login' component={<Login/>} />
          <Route path='menu' component={<MenuBar />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
