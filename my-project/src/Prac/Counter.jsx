import { useState } from "react"


export function Counter(){

    const[count,setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h4>count number is {count}</h4>
            <button onClick={increment}>Incr</button>
        </div>
    )
}