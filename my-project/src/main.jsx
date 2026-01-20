import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CustomDemo } from './Conditional Rendering/CustomDemo';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomDemo/>
  </StrictMode>
)
