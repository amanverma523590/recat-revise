// import { useState } from "react"
// import { EMI_Calculator } from "../EMI_Calculator";
// import { Keyboard } from "../Keyboard Event/Keyboard";

// export function Condition(){

//     const[component,setComponent] = useState();

//     function LoadComponent(cname){
//         if(cname === "emi" ){
//             setComponent(<EMI_Calculator/>)
//         }else{
//             setComponent(<Keyboard/>)
//         }
//     }

//     return(
//         <div>
//             <button onClick={()=>{LoadComponent('emi')}}  >Emi Calculator</button>
//             <button onClick={()=>{LoadComponent('crausole')}} className="mx-4" >Crausoel</button> <hr />
//             <div className="mt-4">
//                 {component}
//             </div>

//         </div>
//     )
// }

export function Condition() {
  if (props.layout === "grid") {
    return (
      <div>
        <h2>Employee</h2>
        <Navbar
          sorting={true}
          caption="Employe Data table"
          fields={["First Name", "Last Name", "Salary"]}
          data={[
            { FirstName: "Aman", LastName: "Verma", Salary: "25000" },
            { FirstName: "Sanam", LastName: "Maharjan", Salary: "30000" },
          ]}
        />

        <h2>Ipl Points</h2>
        <Navbar
          caption="player table"
          fields={["team", "won", "lost"]}
          data={[
            { team: "mi", win: 3, lost: 2 },
            { team: "chenai", win: 5, lost: 1 },
          ]}
        />
      </div>
    );
  }
  else{
    
  }
}
