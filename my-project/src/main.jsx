import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Parent } from '../practise/usecontext/Parent';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Parent/>
  </BrowserRouter>
)
