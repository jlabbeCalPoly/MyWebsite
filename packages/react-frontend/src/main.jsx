import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from "./website/App.jsx"

createRoot(document.getElementById('root')).render(
  /* strict mode causes your components to render twice 
     remove for testing our nav functions */
  <StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)