import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { StrictMode } from 'react';
import { Arr } from '../../Clock/Clock';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Arr/>
  </StrictMode>
   
  
)
