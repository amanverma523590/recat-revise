import { createContext, useState } from "react"
import { WeatherWidget } from "./WeatherWidget"

export let cityContext = createContext(null);

export function WeatherApi(){

    const[searchContext,setSearchContext] = useState();
    const[contextValue,setContextValue] = useState('Delhi');

    function handleTextChange(e){
        setSearchContext(e.target.value);
    }
    function handleSearchClick(){
        setContextValue(searchContext)
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="p-4 border border-5 w-50">
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} placeholder="Enter city name" className="form-control" />
                    <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                </div>
                <div className="mt-4">
                    <cityContext.Provider value={contextValue} >
                        <WeatherWidget/>
                    </cityContext.Provider>
                </div>
            </div>
        </div>
    )
}