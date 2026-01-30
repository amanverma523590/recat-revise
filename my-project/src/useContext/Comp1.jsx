import { Comp2 } from "./Comp2";
import { Comp3 } from "./Comp3";


export function Comp1(){

    let name = "Aman";
    let age = 26;

    return(
        <div>
           <h1 className="bg-danger">comp1</h1>
            <Comp2 nam={name} umar={age} />
            <Comp3 nam={name} umar={age}/>
        </div>
    )
}