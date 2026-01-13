import { useState } from "react"


export function ElementState(){

    const[username,setUserName] = useState('');
    const[msg,setMsg] = useState('')

    function handleFocus(){
        setMsg('name in block letters')
    }
    function handleChange(e){
        setUserName(e.target.value)
    }
    function handleBlur(){
        setMsg('')
        setUserName(username.toUpperCase())
    }

    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={username} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} /></dd>
                <dd className="text-warning">{msg}</dd>
            </dl>
        </div>
    )
}