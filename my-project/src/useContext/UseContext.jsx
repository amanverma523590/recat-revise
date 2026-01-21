import { createContext, useContext, useState } from "react"

    let userContext = createContext(null);

export function Level1(){

    let ref = useContext(userContext);

    return(
        <div className="bg-warning p-3">
            <h3>Level1 - {ref}</h3>
            <Level2/>
        </div>
    )
}

export function Level2(){
    let ref = useContext(userContext);
    return(
        <div className="bg-danger p-3">
            <h3>Level-2 - {ref}</h3>
        </div>
    )
}

export function ContextDemo(){

    const[uname,setUname] = useState('john');
    function handleNameChange(e){
        setUname(e.target.value);
    }

    return(
        <div className="container-fluid bg-dark text-white p-4">
            <h1>Main Component</h1>
            <input type="text" placeholder="User Name" onChange={handleNameChange} />

            <userContext.Provider value={uname}>
                <Level1/>
            </userContext.Provider>

        </div>
    )
    
}