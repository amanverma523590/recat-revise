

export function EventBubbling(){

    // function NavClick(){
    //     alert('nav clicked')
    // }
    // function btnClick(e){
    //     e.stopPropagation();    
    //     alert('search clicked')
    // }

    function handlesub(e){
        e.preventDefault();
        alert(`form submited`)
    }

    return(
        // <div>
        //     <nav onClick={NavClick} style={{border :"10px solid black",backgroundColor:'green', padding:"20px"}}>
        //         <span>Amazon</span>
        //         <button onClick={btnClick} style={{backgroundColor:"red"}}>
        //             Click Me
        //         </button>
        //     </nav>
        // </div>

        <div>
            <form onSubmit={handlesub}>
                Name : <input type="text" name="username" />
                <button>Submit</button>
            </form>
        </div>
    )
}