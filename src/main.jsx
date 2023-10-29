import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Portfolio from './Portfolio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Portfolio />
  </React.StrictMode>,
)
