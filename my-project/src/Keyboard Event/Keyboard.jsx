import { useEffect, useState } from "react"
import axios from 'axios';


export function Keyboard(){

    const[users,setUsers] = useState([{user_id:''}])
    const[userMsg,setUserMsg] = useState('');
    const[validationClass,setValidationClass] = useState('')
    const[toggleMsg,setToggleMsg] = useState('d-none');
    const[emailmsg,setEmailMsg] = useState('');
    const[styleemail,setStyleEmail] = useState('')

    useEffect(()=>{
        axios.get(`user.json`)
        .then(response=>{
            setUsers(response.data);
            console.log(response.data)
        })
    },[])

    function handleKeyUp(e){
        for( let user of users ){
            if( user.user_id == e.target.value ){
                setUserMsg('Name already taken- Try another');
                setValidationClass('text-danger');
                break;
            }else{
                setUserMsg('Id available');
                setValidationClass('text-success')
            }
        }
    }
    function handleKeyPress(e){
        if( e.which >=65 && e.which <=90 ){
            setToggleMsg('d-block');
        }else{
            setToggleMsg('d-none');
        }
    }

    function emailkeypress(e){
        if(e.which>=65 && e.which<=90){
            setEmailMsg("no capital");
            setStyleEmail('text-primary')
        }
    }


    return(
        <div className="container-fluid">
            <h3>Reigester User</h3>
            <form>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onKeyUp={handleKeyUp}/></dd>
                    <dd className={validationClass}>{userMsg}</dd>
                    <dt>Passsword</dt>
                    <dd><input type="password" onKeyPress={handleKeyPress} /></dd>
                    <dd className={toggleMsg}>
                        <span className="bi bi-exclamation-triangle text-warning">Warning Caps On</span>
                    </dd>
                    <dt>email</dt>
                    <dd><input type="email" onKeyPress={emailkeypress} /></dd>
                    <dd className={styleemail}>{emailmsg}</dd>
                </dl>
            </form>
        </div>
    )
}