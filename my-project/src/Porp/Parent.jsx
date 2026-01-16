// import { Child } from "./child"

import { useState } from "react";
import { Child } from "./child";



// export function Parent(){

//     let info = {
//         name:"aman",
//         age:26,
//         address:"nepalgunj",
//         biodata:{
//             ismarried:"nahi",
//             islogin:"ha"
//         }
//     }
//     let info2 = {
//         name:"sanam",
//         age:18,
//         address:"nepalgunj",
//         biodata:{
//             ismarried:"nahi",
//             islogin:"ha"
//         }
//     }
//     let info3 = {
//         name:"sahil",
//         age:56,
//         address:"nepalgunj",
//         biodata:{
//             ismarried:"nahi",
//             islogin:"ha"
//         }
//     }

//     return(
//         <div>
//             <h1>Props in react</h1>
//             <Child user={info} />
//             <Child user={info2} />
//             <Child user={info3} />
//         </div>
//     )
// }


export function Parent(){

    // let arr = ["aman","sanam","sahil","manish"]

    const[change,setChange] = useState('aman')

    return(
        <div>
           <h1>i am parent</h1>
             { change  && <Child name={change}/> }
             <button onClick={()=>setChange("sanam")}>update</button>
        </div>
    )
}



