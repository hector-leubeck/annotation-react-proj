import React from 'react'
import ReactDOM from 'react-dom/client'
import { App  } from './components/App.tsx'
import { Logo } from './components/Logo.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Logo />
    <App />
  </React.StrictMode>,
)
