import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Profile from './pages/Sidebar/Sidebar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  <Profile />
  </StrictMode>,
)
