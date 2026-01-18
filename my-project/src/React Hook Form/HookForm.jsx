// import { useForm } from "react-hook-form";
// import { Navbar } from "./Navbar";



// export function HookForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const submit = (values) => {
//     console.log(values);
//   };

//   return (
//     <div className="container-fluid">

//      <header className="mt-4">
//         <Navbar signin={true} theme="bg-dark text-white" brandName="shopper" 
//         menuItems={['Home','Shop','Pages','Blog']}>
//         </Navbar>
//      </header>

//      <header className="mt-4">
//         <Navbar theme="bg-warning text-white" brandName="Amazon" 
//         menuItems={['Electroncs','Fashion','Accessories','Offers']}>
//         </Navbar>
//      </header>



//       <form onSubmit={handleSubmit(submit)}>
//         <h3>Fill the form</h3>
//         <dl>
//           <dt>UseName:</dt>
//           <dd>
//             <input
//               type="text"
//               name="UserName"
//               {...register("UserName", { required: true, minLength: 4 })}
//             />
//           </dd>
//           <dd className="text-danger">
//             {errors.UserName?.type === "required" ? (
//               <span>User Name Reqired</span>
//             ) : <span></span> && errors.UserName?.type === "minLength" ? (
//               <span>too short</span>
//             ) : (
//               <span></span>
//             )}
//           </dd>

//           <dt>Password</dt>
//           <dd>
//             <input
//               type="password"
//               name="password"
//               {...register("password", { minLength: 2, required: true })}
//             />
//           </dd>
//           <dd className="text-danger">
//             {errors.password?.type === "minLength" ? (
//               <span>add longer password</span>
//             ) : <span></span> && errors.password?.type === "required" ? (
//               <span>fill password</span>
//             ) : (
//               <span></span>
//             )}
//           </dd>
//         </dl>

//         <button type="submit" className="text-danger bg-success">
//           send
//         </button>
//       </form>

//     </div>
//   );
// }

import { Navbar } from "./Navbar";
export function HookForm(){
    return(
        <div>
            <h2>Employee</h2>
            <Navbar
            sorting={true} caption="Employe Data table"
             fields={["First Name","Last Name","Salary"]}
             data={[
                {FirstName:'Aman',LastName:'Verma',Salary:'25000'},
                {FirstName:'Sanam',LastName:'Maharjan',Salary:'30000'}
                ]} 
            />

            <h2>Ipl Points</h2>
                <Navbar
                 caption="player table"
                 fields={["team","won","lost"]}
                 data={[
                    {team:"mi",
                     win:3,
                     lost:2   
                    },
                    {team:"chenai",
                     win:5,
                     lost:1  
                    }
                   
                 ]}
                />
        </div>
    )
}