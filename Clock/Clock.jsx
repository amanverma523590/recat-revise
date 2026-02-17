import { useState,useEffect } from "react";
import { Color } from "./Color";

export function Clock(prop){

    const[time,setTime] = useState(new Date());
    const[color,setColor] = useState('green')

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=> clearInterval(interval)
    },[]);

    return(
        <div>
            <h1>Clock Time</h1>
            <h1 style={{backgroundColor:'black',color:color,width:'180px',padding:'2px',borderRadius:'5px'}}>{time.toLocaleTimeString()}</h1>
            <Color setColor={setColor}/>
        </div>
    )
}