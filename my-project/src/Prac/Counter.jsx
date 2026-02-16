// import { useState } from "react"


// import { useState } from "react"


// export function Counter(){

//     const[count,setCount] = useState(0);

//     function increment(){
//         setCount(count+1);
//     }

//     return(
//         <div>
//             <h1>Counter</h1>
//             <h4>count number is {count}</h4>
//             <button onClick={increment}>Incr</button>
//         </div>
//     )
// }
// import { Prac } from "./Prac";
// import App from "../App";

// export function Counter(){

//     const[display,setDisplay] = useState(true);

//     function handleClick(){
//         setDisplay(!display);
//     }

//     return(
//         <div>
            
//             {display?<h1>Aman Verma</h1>:<h1>Nope</h1>}
//             <button className="btn btn-danger" onClick={handleClick}>Toogle button</button>

//             {display?<Prac/>:display?<App/>:none}

//         </div>
//     )
// }
// import { useState } from "react"

// export function  Counter(){

//     const[count,setCount] = useState(0);

//     function handleChange(){
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleChange} className="btn btn-success">Change</button>
//             <h1>Multiple condtion else if</h1>
//             {count==0?<h2>Condition 1</h2>: count==1? <h1>Condition2</h1>: <h1>Kuch nahi</h1>}
//             <p>count : {count}</p>
//         </div>
//     )
// }

// export function Chiild(props){
//     return(
//         <div>
//             <h1>I am chiild</h1>
//             <h4>the name is {props.name}</h4>
//         </div>
//     )
// }

// export function Child({name="username"}){
//     return(
//         <div>
//             <h2 className="text-danger">I am child</h2>
//             <h4>hi {name}</h4>
//         </div>
//     )
// }

// export function Wraper(props){
//     return(
//         <div >
//             <h2>I am child</h2>
//             {props.text}
//         </div>
//     )
// }

// ▶️Getting value of input filed

// import { useState } from "react"
// export function Practise(){

//     const[data,setData] = useState('Aman');
//     const[addres,setAdres] = useState('Nepal')
//     const[password,setPassword] = useState('');

//     function handleClear(){
//         setData('');
//         setAdres('');
//         setPassword('');
//     }
//     function handleChange(e){
//         setData( e.target.value);
//     }
//     function handleAddress(e){
//         setAdres(e.target.value);
//     }
//     function handlePassword(e){
//         setPassword(e.target.value);
//     }
    

//     return(
//         <div>
//             <h1 style={{backgroundColor:'yellow',color:'red'}}>Getting value of input filed</h1>
//             Name : <input type="text" onChange={handleChange} placeholder="Enter name" value={data}/> <br /> <br />
//             Address: <input type="text" onChange={handleAddress} placeholder="address" value={addres}/> <br /> <br />
//             Password: <input type="password" placeholder="enter password" value={password} onChange={handlePassword}/>
//             <h4>{data}</h4> 
//             <h4>{addres}</h4> 
//             <h4>{password}</h4> 
//             <button className="btn btn-success" onClick={handleClear}>Clear</button>
//         </div>
//     )
// }


// ******------------------------------------------------

// ▶️Handling Checkboxes in form  // as data is not in string form

// import { useState } from "react"

// export function Check(){

//     const[skills,setSkills] = useState([]);

//     function handleSkills(e){
//         console.log(e.target.value,e.target.checked);
//         if(e.target.checked){
//             setSkills([...skills,e.target.value])
//         }
//         else{
//             setSkills(skills.filter((item)=>
//                 item!=e.target.value
//             ))
//         }
//     }

//     return(
//         <div>
//             <h1>Handling checkboxes</h1>
//             <input type="Checkbox" id="php" value="php" onChange={handleSkills} />
//             <label htmlFor="php">PHP</label><br />
//             <input type="Checkbox" id="js" value="js"onChange={handleSkills}/>
//             <label htmlFor="js">Javascript</label><br />
//             <input type="Checkbox" id="node" value="node" onChange={handleSkills}/>
//             <label htmlFor="node">Node</label><br />
//             <input type="Checkbox" id="java" value="java" onChange={handleSkills}/>
//             <label htmlFor="java">Java</label><br />
            
//             <h4>{skills.toString()}</h4>
//         </div>
//     )
// }

// ▶️Handling Radio button and dropdown

import { useState } from "react"

export function Handle(){

    const[gender,setGender] = useState('male');

    const[city,setCity] = useState('gurugram')

    function handleGenderChange(e){
        setGender(e.target.value);
    }
    function handleCityChange(e){
        setCity(e.target.value)
    }

    return(
        <div>
            <h1>Handle Radio button</h1>
            <h5>Select Gender</h5>
            <input type="radio" name='gender' id='male' onChange={handleGenderChange} value="male" checked={gender=='male'}/>
            <label htmlFor="male">Male</label> <br />
            <input type="radio" name="gender" id="female" onChange={handleGenderChange} value="female" checked={gender=='female'} />
            <label htmlFor="female">Female</label>
            <p>selected gender {gender}</p>
            <hr />
            <hr />
            <br />


            <h4>Please select city</h4>
            <select defaultValue={'gurugram'} onChange={handleCityChange}>
                <option value={'noida'}>Noida</option>
                <option value={'bangalore'}>Bangalore</option>
                <option value={'gurugram'}>Gurugram</option>
            </select>
            <h2>{city}</h2>
        </div>
    )
}