import { useRef } from "react";

export function Skills(){

    const thread = useRef(null);
    const thread2 = useRef(null)

    function handleSubmit(e){
        e.preventDefault();
        const user = thread.current.value;
        const pass = thread2.current.value;
        console.log(user);
        console.log(pass)
0    }

    return(
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" ref={thread}/> <br />
                <input type="password" ref={thread2} placeholder="input passwrod"/>
                <button>submit</button>
            </form>
        </div>
    )
}