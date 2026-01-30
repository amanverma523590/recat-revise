import { useContext } from "react"
import {users} from './users'

export function Child1(){
    const data = useContext(users)
    return(
        <div>
            <h4>ha bhia jo udhar data wo hai {data.name}</h4>
        </div>
    )
}