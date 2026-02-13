// import { Child } from "./child"



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


// export function Parent(){

//     // let arr = ["aman","sanam","sahil","manish"]

//     const[change,setChange] = useState('aman')

//     return(
//         <div>
//            <h1>i am parent</h1>
//              { change  && <Child name={change}/> }
//              <button onClick={()=>setChange("sanam")}>update</button>
//         </div>
//     )
// }



// import { Wraper } from "./Wrapper";
// export function Parent(){


//     return(
//         <div>
//             <h1>I am Parent</h1>
//             <Wraper color="red">
//                 <h1>hii</h1>
//             </Wraper>
//             <Wraper color="orange">
//                 <h1>bye</h1>
//             </Wraper>
//         </div>
//     )
// }
// import { useState } from "react";
// import { Chiild } from "../Prac/Counter";

// export function Parent(){

//    const[name,setName] = useState('Aman')
//    const[age,setAge] = useState(26)

    // let arr = [10,'aman',true,25]
    // let isOnline = false;
    // let follow = false;

    // let userObj = {
    //     name : 'aman',
    //     age : 26,
    //     address : {
    //         city : 'banglore',
    //         pin : 560091
    //     }
    // }
    
//     const[name,setName] = useState('aman');

//     function handleChangeClick(){
//         setName(prevName=> 
//             prevName==="aman" ? "sanam" : "aman"
//         )
//     }

//     return(
//         <div>
//             <h1>I am Parent</h1>
//             <button onClick={handleChangeClick} className="btn btn-danger">Click</button>
//             <hr />
//             <Chiild name={name}/>
//         </div>
//     )
// }
import { Wraper } from "../Prac/Counter"                                                                                    

export function Parent(){
    return(
        <div>
            <h1>Parent compo</h1>
            <Wraper text={<h3 className="text-danger">Red Textt</h3>} />
        </div>
    )
}