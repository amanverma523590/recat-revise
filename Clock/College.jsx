import { Student } from "./Student";

export function College({college}) {
  return (
    <div style={{backgroundColor:"#ccc",padding:"20px",borderBottom:"2px solid black",width:'300px' ,marginBottom:"4px"}}>
      <h2>{college.Name}</h2>
      <ul>
        <li>
          <h5>{college.City}</h5>
        </li>
        <li>
            <Student student={college.Student}/>
        </li>
      </ul>
    </div>
  );
}

