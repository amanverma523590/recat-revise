import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ReactEvents } from './React Events/ReactEvent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ReactEvents/>
   
  </StrictMode>
)
