//Bouncing , Debouncing

import { useRef, useState } from "react"


export function Timer(){

    const[msg,setMsg] = useState('Volume 0');

    let thread2 = useRef(null);
    let thread3 = useRef(null);

    function Level1(){
        setMsg('Volume increased to 20%');
    }
    function Level2(){
        setMsg('Volume increased to 50%');
    }
    function Level3(){
        setMsg('Volume increased to 100%');
    }
    function Level4(){
        setMsg('Volume increased to 110%');
    }


    function handleVolumeUp(){
            setTimeout(Level1,3000);
            thread2.current = setTimeout(Level2,5000);  //iska refernce creent me niakl liya aur sueref me store kar diya beacuse memeory me mujhe uska adrees nahi pata it help in finding
             thread3.current=  setTimeout(Level3,7000);
             setTimeout(Level4,10000)
            // Level1();
            // Level2();
            // Level3();
    }
    function handleCancelClick(){
        clearTimeout(thread2.current);
        clearTimeout(thread3.current)
    }

    return(
        <div className="container-fluid">
          <div className="my-4">
            <button onClick={handleCancelClick} className="btn btn-warning mx-2">Cancel Level 2</button>
            <button onClick={handleVolumeUp} className="btn btn-primary bi bi-volume-up"></button>
            <span className="mx-2">{msg}</span>
          </div>
        </div>
    )
}