// import { useEffect, useState } from "react"
// import axios from 'axios';


// export function Keyboard(){

//     const[users,setUsers] = useState([{user_id:''}])
//     const[userMsg,setUserMsg] = useState('');
//     const[validationClass,setValidationClass] = useState('')
//     const[toggleMsg,setToggleMsg] = useState('d-none');
//     const[emailmsg,setEmailMsg] = useState('');
//     const[styleemail,setStyleEmail] = useState('')

//     useEffect(()=>{
//         axios.get(`user.json`)
//         .then(response=>{
//             setUsers(response.data);
//             console.log(response.data)
//         })
//     },[])

//     function handleKeyUp(e){
//         for( let user of users ){
//             if( user.user_id == e.target.value ){
//                 setUserMsg('Name already taken- Try another');
//                 setValidationClass('text-danger');
//                 break;
//             }else{
//                 setUserMsg('Id available');
//                 setValidationClass('text-success')
//             }
//         }
//     }
//     function handleKeyPress(e){
//         if( e.which >=65 && e.which <=90 ){
//             setToggleMsg('d-block');
//         }else{
//             setToggleMsg('d-none');
//         }
//     }

//     function emailkeypress(e){
//         if(e.which>=65 && e.which<=90){
//             setEmailMsg("no capital");
//             setStyleEmail('text-primary')
//         }
//     }


//     return(
//         <div className="container-fluid">
//             <h3>Reigester User</h3>
//             <form>
//                 <dl>
//                     <dt>User Id</dt>
//                     <dd><input type="text" onKeyUp={handleKeyUp}/></dd>
//                     <dd className={validationClass}>{userMsg}</dd>
//                     <dt>Passsword</dt>
//                     <dd><input type="password" onKeyPress={handleKeyPress} /></dd>
//                     <dd className={toggleMsg}>
//                         <span className="bi bi-exclamation-triangle text-warning">Warning Caps On</span>
//                     </dd>
//                     <dt>email</dt>
//                     <dd><input type="email" onKeyPress={emailkeypress} /></dd>
//                     <dd className={styleemail}>{emailmsg}</dd>
//                 </dl>
//             </form>
//         </div>
//     )
// }
import { useEffect, useState } from 'react'
import axios from 'axios';
import './key-demo.css'

export function Keyboard(){

    const[users,setUsers] = useState([{user_id:''}]);
    const[userMsg,setUserMsg] = useState('');
    const[validationClass,setValidationClass] = useState('');
    const[toggleMsg,setToggleMsg] = useState('d-none');
    const[textStyle,setTextStyle] = useState('')

    useEffect(()=>{
        axios.get('user.json')
        .then(response=>{
            setUsers(response.data);
            console.log(response.data)
        })
    },[])

    function handleKeyUp(e){
        for( let user of users ){
            if(e.target.value == user.user_id){
                setUserMsg('Name already exits -Try another');
                setValidationClass('text-danger');
                setTextStyle('invalid-style');
                break;
            }else{
                setUserMsg('Id aviable');
                setValidationClass('text-success');
                setTextStyle('valid-style')
            }
        }
    }
    function handleKeyPress(e){
        if( e.which>=65 && e.which<=90 ){
            setToggleMsg('d-block');
        }
        else{
            setToggleMsg('d-none')
        }
    }

    return(
        <div className='container-fluid'>
            <h3>Register User</h3>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" onKeyUp={handleKeyUp} className={textStyle}/></dd>
                <dd className={validationClass}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={handleKeyPress} /></dd>
                <dd className={toggleMsg}>
                    <span className='bi bi-exclamation-triangle text-warning'>Warning Caps on</span>
                </dd>
            </dl>
        </div>
    )
}