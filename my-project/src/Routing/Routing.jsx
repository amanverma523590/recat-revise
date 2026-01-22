import {BrowserRouter, Link,Route,Routes} from 'react-router-dom'
import { Login } from './Login'
import { Shopping } from './Shopping'

export function Routing(){
    return(
        <div className="container-fluid">
           <BrowserRouter>

             <header className='p-2 text-center border border-1'>
                <h1>Shopping</h1>
                <nav>
                    <span className='mx-4'><Link to="/" >Home</Link></span>
                    <span className='mx-4'><Link to="mobile">Mobile</Link></span>
                    <span className='mx-4'><Link to="shopping">shopping</Link></span>
                    <span className='mx-4'><Link to="login">Login</Link></span>
                    <span className='mx-4'><Link to="emi">Emi Calculator</Link></span>
                </nav>
             </header>

             <section>
                <Routes>
                    <Route path='/' element={ <div> <h5>Shoppig Home</h5> <p>Women Fashion | Kids </p>  </div> } />
                    <Route path="shopping" element={<Shopping/>} />
                    <Route path='login' element={<Login/>}/>
                </Routes>
             </section>

              
           </BrowserRouter>
        </div>
    )
}