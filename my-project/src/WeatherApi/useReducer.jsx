import { useReducer } from "react"


export function ReducerHook(){

    const initialState={
        count : 0,
    };

    function reducer(state,action){


        if(action.type==='Increment'){
           return {count: state.count+1};
        }else if(action.type==='Decrement'){
            return {count: state.count-1};
        }else{
            return ({count:0});
        }
    }

    const[state,dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <button className="mx-4 mt-4 btn btn-warning" onClick={()=>dispatch({ type:"Increment" })}>Increment</button>
            <button className="mx-4 mt-4 btn btn-danger" onClick={()=>dispatch( {type:'Decrement'} )}>Decrement</button>
            <button className="mx-4 mt-4 btn btn-info" onClick={()=>dispatch({type:'Reset'})}>Reset</button>
            <h1>{state.count}</h1>
        </div>
    )
}



