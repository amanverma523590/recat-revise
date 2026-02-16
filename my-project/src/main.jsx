import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { StrictMode } from 'react';
import { Handle } from './Prac/Counter';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Handle/>
  </StrictMode>
   
  
)
