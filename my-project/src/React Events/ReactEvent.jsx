import { useState } from "react"


export function ReactEvents(){

    // const [uname,setUname] = useState("Simmran")

    // function handleChange(e){
    //     setUname(e.target.value)
    // }

    // return(
    //     <div>
    //        <h2> I am Recat Events....</h2>

    //        <form>
    //         Name : <input type="text" value={uname} onChange={handleChange}/>
    //        </form>
    //        <p>uname is changed now : {uname}</p>
    //     </div>
    // )

    function handleClick(e,text,array,obj){
        console.log(`Pahele event le lete hai :  ${e.clientX}`  )
        console.log(`chalo ab text le lete hai : ${text}`) 
        console.log(`ab array lelete hai : ${array}`)
        console.log(`ab obj lelete hai ${obj.Rate}`)

    }

    return(
        <div>
            <button id="btnnInsert" value="Insert" 
            onClick={ (event)=> handleClick(event,'Welcome',["Delhi","Banglore"], {Rate : 4.2} )} 
            
                style={ {width:"200px", backgroundColor:"red", } }
            >
            Insert</button>
        </div>
    )

}