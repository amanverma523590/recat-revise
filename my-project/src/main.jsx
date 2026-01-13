import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { EMI_Calculator } from './EMI_Calculator';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <EMI_Calculator/>
  </StrictMode>
)
