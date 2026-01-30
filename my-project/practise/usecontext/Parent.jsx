import {users} from './users'
import { Child1 } from "./Child1";

export function Parent(){

    let name  = "Aman";
    let age  = 20;

    return(
        <div>
            <h1>Data is </h1>

            <users.Provider value={{name,age}}>
                <Child1/>
            </users.Provider>
        </div>
    )
}