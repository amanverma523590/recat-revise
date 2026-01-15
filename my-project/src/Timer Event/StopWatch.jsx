import { useRef, useState } from "react"


export function StopWatch(){

    const[time,setTime] = useState(null);

    const intervalRef = useRef(null)

    function handleStart(){
        intervalRef.current = setInterval(()=>{
            setTime(Date.now)
        },10)
    }
    function handleStop(){
        clearInterval(intervalRef.current)
    }

    return(
        <div>
           <h3> Design Stop Watch</h3>
            <h4>Timer = {time}</h4>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    )
}