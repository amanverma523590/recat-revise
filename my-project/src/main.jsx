import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Comp1 } from './useContext/Comp1';
import { Pd } from './PropDRilling/Pd';
// import { App } from './Rourter/Router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   {/* <App/> */}
   {/* <Comp1/> */}
   <Pd/>
  </BrowserRouter>
)
