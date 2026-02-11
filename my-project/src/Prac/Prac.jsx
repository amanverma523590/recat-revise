

// export function Prac(){

//     // const name = "Aman";
//     let x = 10;
//     let x1 = 2;
//     let y  = true;

//     // function calling(){
//     //     prompt('i am called');
//     // }

//     function calling(a,b){
//         return a+b;
//     }

//     let obj = {
//         name:'aman',
//         age:26,
//         city:{
//             cityName:'banglore',
//             pin : 560091
//         }
//     }

//     const arr = ['aman',2,'sanam',true];

//     let path = "https://imgs.search.brave.com/pov-yii2CL_vn5RJESMh1O2hPWw-lHYv6t7IFoBS00g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc0LzIxLzA4/LzM2MF9GXzE3NDIx/MDg5NV91aXk4cmNG/SnFUS1Azb3drRWls/cGpUTkV5OVAzelM0/ai5qcGc"

//     return(
//        <div>
//             <h1>Revise React</h1>

//             {/* <p>hey {name} what's up</p>
//             <p>add is {x+x1}</p>
//             <h4>i want both { `${name?name:'user not online'} ${y} ` }</h4>
//             <p>callin the function {calling(2,3)}</p> */}

//             <h4>{`ok bro ur name is ${obj.name} $ u live in ${obj.city.cityName}`}</h4>
//             <h5>{ `array are-> ${arr}` }</h5>

//             <img src={path} alt="no img" height="300px" width="300px" />
//        </div>
//     )
// }

//  const fruit = (name)=>{
//         alert(`i am ${name}`);
//     }

// export function Prac(){

    

//     function call(number){
//         return alert(`i am called ${number}`);
//     }
//      const fruit = (name)=>{
//         alert(`i am ${name}`);
//     }
   
    
//     return(
//         <div>
//             <h1>learnng</h1>
//             <button className="btn btn-danger" onClick={()=>call(5)}>Click Me</button>
//             <button className="btn btn-success" onClick={()=>fruit("apple")}>Click Me</button>
//             <button className="btn btn-success" onClick={()=>fruit("kela")}>Click Me</button>
//         </div>
//     )
// }

import { useState } from "react";

export function Prac(){

    const[fruit,setFruit] = useState("Apple");

    function change(){
        setFruit("Banana")
    }

    return(
        <div>
            <h1>State in React</h1>
            <h1>fruit iis {fruit}</h1>
            <button onClick={change}>Change</button>
        </div>
    )
}