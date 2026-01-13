

export function Button(){

    function handleContextMenu(){
        document.oncontextmenu = ()=>{
            alert(`Right Click Not allowed`);
            return false;
        }
    }
    function handleDbClick(){
        window.open('/assets/nepal','iphone','width=200,height = 200');
    }

    return(
        <div onContextMenu={handleContextMenu} className="container-fluid">
            <img src="/assets/nepal.png" alt="noimg" width={100} height={100} onDoubleClick={handleDbClick} />
            <p>Double Click To view Large</p>
            <h1>Right Click Disable this Page</h1>
        </div>
    )
}