


export function Pd(){
    let data = "i am parent data";
    return(
        <div>
            <h2>Parent</h2>
            <Child data={data}/>
        </div>
    )
}

function Child(props){
    return(
        <div>
         <h4> chld-data of parent is {props.data}</h4>
         <GreatChild data={props.data}/>
        </div>
    )
}

function GreatChild(props){
    return(
        <div>
            <p>greatchild got {props.data}</p>
            <GreatGrandChild data={props.data} />
        </div>
    )
}
function GreatGrandChild(props){
    return(
        <div>
            <p>GreatGrandChild?  {props.data}</p>
        </div>
    )
}
