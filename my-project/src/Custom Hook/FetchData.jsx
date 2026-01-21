import { useEffect, useState } from "react";


export function useFetchData(url){
    
    const[data,setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then( response=> response.json())
        .then(apidata => {
            setData(apidata)
        })
    },[url])

    return data;

}