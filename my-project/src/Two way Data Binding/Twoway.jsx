import { useEffect, useState } from "react";

export function TwoWay() {
  const [uname, setUname] = useState("Aman");


  function handleChange(e){
     setUname(e.target.value)
  }

  return (
    <>
      <form>
        Name :
        <input type="text" value={uname} 
        onChange={handleChange}/>
      </form>

      <p> current name :{uname}</p>
    </>
  );
}
