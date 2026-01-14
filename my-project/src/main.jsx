import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Timer } from './Timer Event/Timer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Timer/>
  </StrictMode>
)
