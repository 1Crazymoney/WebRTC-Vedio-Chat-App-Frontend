import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SocketProvider } from './context/socket-context.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<SocketProvider>
    <App />
  </SocketProvider>
  </BrowserRouter>
)
