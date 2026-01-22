import { useMemo, useState } from "react"


export function UseMemo(){

    const[ref,setRef] = useState();

    function GetData(){
        return 30;
    }

    const data = useMemo(()=>{
        return GetData;
    },[])

    function handleClick(){
        setRef(data);
    }

    return(
        <div>
            <button className="btn btn-danger mt-4 mx-4" onClick={handleClick}>Get Data</button>
            <h1 className="mt-4 mx-4 bg-black text-white"> Your Data is :  {ref}</h1>
        </div>
    )
}