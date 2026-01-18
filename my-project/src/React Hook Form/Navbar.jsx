// export function Navbar(props){

//     return(
//         <nav className={`d-flex ${props.theme} justify-content-between p-3 align-items-center border border-2 `}>
//            <div>
//             <span className="fs-4 fw-bold">{props.brandName}</span>
//            </div>
//            <div>
//             {
//                 props.menuItems.map(item=>(
//                     <span key={item}className="mx-4">{item}</span>
//                 ))
//             }
//            </div>
//            <div>
//             {
//                 (props.signin == true) ?
//                  <div><button className="btn btn-danger">Sign-in</button></div>
//                  :null
//             }
//            </div>
//         </nav>
//     )
// }

export function Navbar(props) {
  console.log(props);
  return (
    <div>
      <table className="table table-hover caption-top">
        <caption>{props.caption}</caption>
        <thead>
        <tr>
          {props.fields.map((field) => (
            <th key={field}>
              {field}
              {props.sorting == true ? (
                <button className="btn bi bi-sort-alpha-down"></button>
              ) : null}
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((record, rowindex) => (
            <tr key={rowindex}>
              {Object.keys(record).map((key) => (
                <td key={key}>{record[key]}</td>
              ))}
              <td>
                <button className="btn btn-danger bi bi-trash"></button>
                <button className="btn btn-danger bi bi-pen mx-2"></button>
                <button className="btn btn-danger bi bi-eye mx-2"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
