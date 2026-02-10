import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Prac } from './Prac/Prac';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Prac/>
  </StrictMode>
   
  
)
