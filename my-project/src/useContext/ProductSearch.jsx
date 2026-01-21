import { createContext, useState } from "react"
import { MainComponent } from "./MainComponent";

export const searchContext = createContext(null);

export function ProductSearch(){

    const[searchString,setSearchString] = useState('');
    const[contextValue,setContextValue] = useState('electronics')


    function handleSearchChange(e){
        setSearchString(e.target.value);
    }
    function handleSearchClick(){
        setContextValue(searchString);
    }

    return(
        <div className="container-fluid">
            <header className="mt-3 p-4 d-flex justify-content-center">
                <div className="w-50 input-group">
                    <input type="text" onChange={handleSearchChange} placeholder="search item here" className="form-control"/>
                    <button onClick={handleSearchClick} className="bi bi-search btn btn-warning"></button>
                </div>
            </header>
            <section className="mt-4">
                <searchContext.Provider value={contextValue} >
                    <MainComponent/>
                </searchContext.Provider>
            </section>
        </div>
    )
}