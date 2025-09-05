// main.tsx
// Entry point: bootstraps the React app and mounts it to #root.
// - StrictMode helps highlight potential problems during development
// - Global styles are imported here once
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
