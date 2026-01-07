// export function DataBinding() {
//   let categories = ["All", "Electronics", "Footware", "Fashion"];

//   return (
//     <div className="container-fluid">
//       {/* Navigation */}

//       <nav className="bg-danger text-dark d-flex justify-content-around">
//         {categories.map((change) => (
//           <span key={change} className="me-4">
//             {change}
//           </span>
//         ))}
//       </nav>

//       {/* button */}

//       <div className="btn-group-vertical mt-1">
//         {categories.map((callback) => (
//           <button key={callback} className="btn btn-danger mb-1 mt-1">
//             {callback}
//           </button>
//         ))}
//       </div>

//       {/* orderlist */}

//       <div>
//         <ol>
//           {categories.map((callback) => (
//             <li key={callback}>{callback}</li>
//           ))}
//         </ol>
//       </div>

//     {/* unorderlist */}

//         <ul>
//         {
//             categories.map((cb)=>(
//                 <li key={cb}>{cb}</li>
//             ))
//         }
//         </ul>

//     {/* select */}
//         <select>
//             {
//                 categories.map((cb)=>(
//                     <option key={cb}>
//                         {cb}
//                     </option>
//                 ))
//             }
//         </select>

//         {/* table */}

//         <table className="table table-bordered table-striped">
//             <thead>
//                 <tr>
//                     <th>Categories of Item</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     categories.map((cb)=>(
//                         <tr key={cb}>
//                             <td className="d-flex justify-content-between">
//                                 <span>{cb}</span>
//                              <button className="btn btn-danger bi bi-trash"></button>
//                              </td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </table>

//     </div>
//   );
// }

// -----------------------------------------------------------------------

// --------------------Object Binding-------------

// export function DataBinding(){

//   var product = {
//     Name : "Samsung Tv",
//     Price : 43700,
//     Stock : true,
//     Cities : ['Banglore','Delhi','Hydrabad'],
//     Rating : {Rate : 4.2, Count : 500}
//   };

//   return(
//     <div>
//       <h2>Product Detail</h2>
//       <dl>
//         <dt>Name</dt>
//         <dd>{product.Name}</dd>
//         <dt>Price</dt>
//         <dd>{product.Price}</dd>
//         <dt>Stock</dt>
//         <dd>{ product.Stock==true ? 'Avialable' :' Not Available' }</dd>

//         <dt>Shipped To</dt>
//         <dd>
//           <ol>
//            {
//              product.Cities.map((city)=>(
//               <li key={city}>{city}</li>
//              ))
//            }
//           </ol>
//         </dd>

//         <dt>Rating</dt>
//         <dd>{product.Rating.Rate}{" "}</dd>
//         <span className="bi bi-star-fill text-warning"></span>
//         {product.Rating.Count}

//       </dl>
//     </div>
//   )
// }
// -----------------------------------------------
// -------Array of object---------------------

// export function DataBinding() {

//   var menu = [
//     {
//       Category : "Electronics",
//       Products : ["Television","Mobile","Laptop"]
//     },
//     {
//       Category : "Fashion",
//       Products : ["Shirt","Pant","Coat"]
//     }
//   ]

//   return (
//     <div>
//       <ol>
//         {
//           menu.map((items)=>(
//             <li key={items.Category}>{items.Category}
//               <ul>
//                 {
//                   items.Products.map((product)=>(
//                     <li key={product}>{product}</li>
//                   ))
//                 }
//               </ul>
//             </li>
//           ))
//         }
//       </ol>

//     </div>
//   );
// }

// -------------------------------------------


// export function DataBinding() {
 
//   var iccTable = [
//     { Team: "India", Matches : 10, Win : 5, Lost : 5, PTS: 25, NRR: "+2.48",
//        Flag: "/assets/india.png" },
//     { Team: "Nepal", Matches : 9, Win : 7, Lost : 2, PTS: 32, NRR: "+4.72",
//        Flag: "/assets/nepal.png" },
//     { Team: "Australia", Matches : 8, Win : 3, Lost : 5, PTS: 19, NRR: "+0.56",
//        Flag: "/assets/australia.png" }
//   ]

//   return (
//     <div>
//       <h1>World Cup Table</h1>

//       <table className="table table-striped table-hover w-50">
//         <thead>
//           <tr>
//             <th>Team</th>
//             <th>Matches</th>
//             <th>Win</th>
//             <th>Lost</th>
//             <th>PTS</th>
//             <th>NRR</th>
//           </tr>
//         </thead>

//         <tbody>
//           {
//             iccTable.map(( country )=>(
//               <tr key={country.Team}>
//                 <td> <img src={country.Flag} alt="no img" width='30' height='25'/> {country.Team}</td>
//                 <td>{country.Matches}</td>
//                 <td>{country.Win}</td>
//                 <td>{country.Lost}</td>
//                 <td>{country.PTS}</td>
//                 <td>{country.NRR}</td>
//               </tr>
//             ))
//           }
          
//         </tbody>

//       </table>

//     </div>
//   );
// }

export function DataBinding(){

  let departure = new Date();
  let month = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return(
    <div>
      Departure :
       {days[departure.getDay()]},
       {departure.getDate()},
       {month[departure.getMonth()]},
       {departure.getFullYear()}
    </div>
  )
}
