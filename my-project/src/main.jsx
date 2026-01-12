import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { EventBubbling } from './Two way Data Binding/EventBubbling';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <EventBubbling/>
  </StrictMode>
)
