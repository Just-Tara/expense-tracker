import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TransactionProvider } from 
  './Context/TransactionContext.jsx'

createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <App/>
  </TransactionProvider>
)
