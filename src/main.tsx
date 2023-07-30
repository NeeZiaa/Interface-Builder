import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import KeyboardListener from "./providers/KeyboardListener";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KeyboardListener>
      <App />
    </KeyboardListener>
  </React.StrictMode>,
)
