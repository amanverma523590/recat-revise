
export function Color({setColor}){

    return(
        <div>
            <h1>Change color</h1>
            <select onChange={(e)=>setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    )
}