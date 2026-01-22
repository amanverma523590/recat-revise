import { useCallback, useEffect, useState } from "react"


export function UseCallback(){

    const[timer,setTimer] = useState();
    const[ref,setRef] = useState();

    function SetTime(){
        var now = new Date();
        setTimer(now.toLocaleTimeString());
    }
    useEffect(()=>{
        SetTime();
    },[])

    const fun = useCallback( ()=>{
        function GetData(){
            setRef(30);
        }
        GetData();
    },[] )

    function handleClick(){
        fun();
    }

    return(
        <div>
            <p>Component Render Timer: {timer}</p>
            <button className="btn btn-success" onClick={handleClick}>Get Data</button>
            <h1>{ref}</h1>
        </div>
    )
}