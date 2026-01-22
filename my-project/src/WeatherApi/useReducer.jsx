import { useReducer } from "react"



export function ReducerHook(){

    function reducer(state,action){
        console.log(state)
        console.log(action)

        if(action.type==='Increment'){
           return state +1;
        }else{
            return state-1;
        }
    }


    const[count,dispatch] = useReducer(reducer,0);
    console.log(useReducer(reducer,0))

    return(
        <div>
            <button className="mx-4 mt-4 btn btn-warning" onClick={()=>dispatch({ type:"Increment" })}>Increment</button>
            <button className="mx-4 mt-4 btn btn-danger" onClick={()=>dispatch( {type:'Decrement'} )}>Decrement</button>
        </div>
    )
}