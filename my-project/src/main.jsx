import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UseMemo } from './Hook/UseMemo';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UseMemo/>
  </StrictMode>
)
