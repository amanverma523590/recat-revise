import { useState } from "react";
import { Grid } from "./Grid";

export function CustomDemo(){
    const [layout,setLayout] = useState('card');

    function handleLayoutChange(e){
        setLayout(e.target.value)
    }

    return(
        <div className="container-fluid">
            <h2>Employee</h2>
            <div className="my-3 w-25">
                <label className="form-label">Select Layout</label>
                <div>
                    <select>
                        <option>Select Layout</option>
                        <option value='Grid'>Grid</option>
                        <option value='Card'>Select Layout</option>
                    </select>
                </div>
            </div>

            <Grid layout={layout} theme='table-warning' sorting={true} caption='Employe Data Table' fields={ ["FirstName","LastName","Salary"] } data={[{FirstName:"Aman",LastName:"verma", Salary:50000 },{FirstName:"Sanam",LastName:"maharjan", Salary:1000000 }]} />

            <Grid layout='grid' theme='table-danger' caption='playoff table' fields={['Team',"Won","Loast"]} data={[{Team:"AMan",won:5,lost:2}, {Team:"sanam",won:5,lost:3}]} />

        </div>
    )
}