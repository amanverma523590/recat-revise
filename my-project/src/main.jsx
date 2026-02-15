import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { StrictMode } from 'react';
import { Check } from './Prac/Counter';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Check/>
  </StrictMode>
   
  
)
