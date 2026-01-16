

export function Wraper({children,color}){
    console.log(children)
    return(
        <div style={{color:color,border:"4px solid green", width:"200px"}}>
            {children}
        </div>
    )
}