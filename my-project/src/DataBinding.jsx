// export function DataBinding() {
//   let categories = ["All", "Electronics", "Footware", "Fashion"];

import { useEffect, useState } from "react"

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

// export function DataBinding(){

//   let departure = new Date();
//   let month = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
//   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   return(
//     <div>
//       Departure :
//        {days[departure.getDay()]},
//        {departure.getDate()},
//        {month[departure.getMonth()]},
//        {departure.getFullYear()}
//     </div>
//   )
// }


//Primitive data type
// 1) Number  

// export function DataBinding(){

//   const[price] = useState(600000)

//   return(
//     <div>
//       <h3>Price {price.toLocaleString('en-IN', {style : 'currency', currency:'INR'} )}</h3>
//     </div>
//   )
// }


//2) BOOLEAN TYPE

// import './data.css'
// export function DataBinding(){

//   const[stock] = useState(false)

//   return(
//     <div>
//       <header>
//         <span>Shopping</span>
//         {
//           (sessionStorage.getItem("uname")===null)?
//           <button>Sign-In</button>:
//            <span>{sessionStorage.getItem("uname")}<button>Log-Out</button> </span> 
//         }
//       </header>

        

//     </div>
    
//   )
// }


// undefined type

// export function DataBinding(){

//   // const[price] = useState();

//   const[paisa] = useState(2840023n);

//   return(
//     <div>
//       {/* {(price)? price : "price not defined"} */}
//      <p>paisa : {paisa.toString()}</p>
//     </div>
//   )
// }

//symbol

// export function DataBinding(){

//   let ID = Symbol();

//   const[product] = useState( { [ID]:1, Name : "TV", Price : 45000  } );

//   return(
//     <div>
//      {
//       <p>name{product.Name}</p>
//      }
//     </div>
//   )
// }

import axios from 'axios'

export function DataBinding(){

  const[product,setProduct] = useState({ title:'', price: 0, rating : { rate:0, ratings: 0,  reviews:0 }, image: null, offers:[] });

  //fetch()
  // function GetProduct(){
  //  fetch(`product.json`)
  //  .then(response => response.json())
  //  .then(data=>{
  //   setProduct(data)
  //  })
  // }
//axios
  function GetProduct(){
    axios.get(`prodct.json`)
    .then(response => {
      setProduct(response.data)
    })
  }

  useEffect(()=>{
    GetProduct();
  },[])

  return(
    <div className="container-fluid">
      <div className="row mt-4">

        <div className="col-3">
         { product.image ? ( <img src={product.image} alt="no image" width='100%' /> )
         : ( <div>No image</div> ) }
        </div>

        <div className="col-9">
          <div className="fs-4 fw-bold">{product.title}</div>
          <div className="mt-2"> 
            <span className="badge bg-success ">{product.rating.rate}</span>
            <span className="bi bi-star-fill "></span> <span></span>
            <span className="mx-2 text-secondary fs-6 fw-bold">{product.rating.ratings.toLocaleString()}  ratings & {product.rating.reviews} reviews</span>
          </div>

          <div className="mt-2">
            <div className="fs-1 fw-bold"> &#8377; {product.price.toLocaleString('en-IN')}</div>
          </div>

          <div className="mt-2">
            <ul className="list-unstyled">
              {
                product.offers.map((offer,i)=>(
                  <li className="bi bi-tag-fill text-success my-2" key={i}>
                    <span className="text-secondary">{offer}</span>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}