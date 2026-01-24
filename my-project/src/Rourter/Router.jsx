import { Route, Routes,Link } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"


export function App(){



    return(
        <div>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
    )
}