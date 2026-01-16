

// export function Child({user}){
//     console.log(user)
//     return(
//         <div>
//             <p>hi {user.name} </p>
//             <p>i am {user.age} years old</p>
//             <hr />
//         </div>
//     )
// }

// export function Child({name}){

//     console.log(name)
//     return(
//         <div>
//             <h3>student name = {name}</h3>

//         </div>
//     )
// }

export function Child({name="_Blank_"}){
    console.log(name)
    return(
        <div>
            <h3>i am {name}</h3>
        </div>
    )
}