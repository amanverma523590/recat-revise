//Hard code approach

// import { useState } from "react"


// export function Form(){

//     const[userDetails,setUserDetails] = useState({ UserName:'',Password:'', Mobile:'',City:'',Gender:'' });
//     const[errors,setErrors] = useState( { UserName:'',Password:'', Mobile:'',City:'',Gender:'' } )

//     function handleFormSubmit(e){
//         e.preventDefault();
//         if(userDetails.UserName == ""){
//             setErrors({
//                 UserName : "usernam is rquired"
//             })
//         }else{
//             alert(JSON.stringify(userDetails));
//         }
//     }
//     function hanldeNameBlur(e){
//         if(e.target.value === ""){
//             setErrors({UserName: "username is required"})
//         }else{
//             setErrors({UserName : ''})
//         }
//     }
//     function handleNameChange(e){
//         setUserDetails({
//             UserName: e.target.value,
//             Password:userDetails.Password,
//             Mobile:userDetails.Mobile,
//             City:userDetails.City,
//             Gender : userDetails.Gender
//         })
//     }

//     function hanldePasswordChange(e){
//         setUserDetails({
//             UserName:userDetails.UserName,
//             Password:e.target.value,
//             Mobile: userDetails.Mobile,
//             City : userDetails.City,
//             Gender: userDetails.Gender
//         })
        
//     }
//     function hanldeMobileChange(e){
//         setUserDetails({
//             UserName : userDetails.UserName,
//             Password: userDetails.Password,
//             Mobile : e.target.value,
//             City : userDetails.City,
//             Gender : userDetails.Gender
//         })
//     }
//     function handleCityChange(e){
//         setUserDetails({
//             UserName : userDetails.UserName,
//             Password: userDetails.Password,
//             Mobile : userDetails.Mobile,
//             City : e.target.value,
//             Gender : userDetails.Gender
//         })
//     }
//     function handleGenderChange(e){
//         setUserDetails({
//             UserName : userDetails.UserName,
//             Password: userDetails.Password,
//             Mobile : userDetails.Mobile,
//             City : userDetails.City,
//             Gender : e.target.value
//         })
//     }

//     function hanldePasswordBlur(e){
//         if(e.target.value == ""){
//             setErrors({Password : "Abey chutiye password to dal"})
//         }else{
//             setErrors({Password : ''})
//         }
//     }
//     return(
//         <div className="container-fluid">
//            <form onSubmit={handleFormSubmit}  style={{border:'1px solid red',width:'400px',padding:'10px'}}>
//              <h3>Form For React Developer</h3>
//              <dl>
//                 <dt> User Name:</dt>
//                 <dd><input type="text" onKeyUp={hanldeNameBlur} onBlur={hanldeNameBlur} onChange={handleNameChange} /></dd>
//                 <dd className="text-danger">{errors.UserName}</dd>

//                 <dt>Password</dt>
//                 <dd><input type="password" onChange={hanldePasswordChange} onBlur={hanldePasswordBlur} /></dd>
//                 <dd style={{color:"lightsalmon"}}>{errors.Password}</dd>
                
//                 <dt>Mobile no</dt>
//                 <dd><input type="text" onChange={hanldeMobileChange} /></dd>

//                 <dt>City</dt>
//                 <dd>
//                     <select onChange={handleCityChange}>
//                         <option>Select city</option>
//                         <option>Delhi</option>
//                         <option>Banglore</option>
//                         <option>Mumbai</option>
//                     </select>
//                 </dd>

//                 <dt>Gender</dt>
//                 <dd>
//                     <label>Male</label>
//                     <input type="radio" onChange={handleGenderChange} name="gender" value="Male"/>
//                     <label>Female</label>
//                     <input type="radio" onChange={handleGenderChange} name="gender" value="Female"/>
//                 </dd>

//              </dl>
//              <input type="submit" />
//            </form>
//         </div>
//     )
// }

//React Form Data

export function Form(){

    function hanldeFormSubmit(e){
        e.preventDefault();
        const form = e.target;
        // console.log(from)
        const formData = new FormData (form);
        for(let item of formData.entries()){
            console.log(item)
        }
    }

    return(
        <div>
            <h4>Register form</h4>
            <form onSubmit={hanldeFormSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="name"/></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="email"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="password"/></dd>
                    <dt>Gender</dt>
                    <dd>
                        <label>Male</label>
                        <input type="radio" name="Gender" value="male"/>
                        <label>Female</label>
                        <input type="radio" name="Gender" value="female"/>
                    </dd>
                </dl>
                <input type="submit" />
            </form>
        </div>
    )
}