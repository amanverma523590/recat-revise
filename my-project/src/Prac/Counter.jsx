// import { useState } from "react"


// import { useState } from "react"


// export function Counter(){

//     const[count,setCount] = useState(0);

//     function increment(){
//         setCount(count+1);
//     }

//     return(
//         <div>
//             <h1>Counter</h1>
//             <h4>count number is {count}</h4>
//             <button onClick={increment}>Incr</button>
//         </div>
//     )
// }
// import { Prac } from "./Prac";
// import App from "../App";

// export function Counter(){

//     const[display,setDisplay] = useState(true);

//     function handleClick(){
//         setDisplay(!display);
//     }

//     return(
//         <div>
            
//             {display?<h1>Aman Verma</h1>:<h1>Nope</h1>}
//             <button className="btn btn-danger" onClick={handleClick}>Toogle button</button>

//             {display?<Prac/>:display?<App/>:none}

//         </div>
//     )
// }
// import { useState } from "react"

// export function  Counter(){

//     const[count,setCount] = useState(0);

//     function handleChange(){
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleChange} className="btn btn-success">Change</button>
//             <h1>Multiple condtion else if</h1>
//             {count==0?<h2>Condition 1</h2>: count==1? <h1>Condition2</h1>: <h1>Kuch nahi</h1>}
//             <p>count : {count}</p>
//         </div>
//     )
// }

// export function Chiild(props){
//     return(
//         <div>
//             <h1>I am chiild</h1>
//             <h4>the name is {props.name}</h4>
//         </div>
//     )
// }

// export function Child({name="username"}){
//     return(
//         <div>
//             <h2 className="text-danger">I am child</h2>
//             <h4>hi {name}</h4>
//         </div>
//     )
// }

export function Wraper(props){
    return(
        <div >
            <h2>I am child</h2>
            {props.text}
        </div>
    )
}