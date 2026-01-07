export function DataBinding() {
  let categories = ["All", "Electronics", "Footware", "Fashion"];

  return (
    <div className="container-fluid">
      {/* Navigation */}

      <nav className="bg-danger text-dark d-flex justify-content-around">
        {categories.map((change) => (
          <span key={change} className="me-4">
            {change}
          </span>
        ))}
      </nav>

      {/* button */}

      <div className="btn-group-vertical mt-1">
        {categories.map((callback) => (
          <button key={callback} className="btn btn-danger mb-1 mt-1">
            {callback}
          </button>
        ))}
      </div>

      {/* orderlist */}

      <div>
        <ol>
          {categories.map((callback) => (
            <li key={callback}>{callback}</li>
          ))}
        </ol>
      </div>

    {/* unorderlist */}
    
        <ul>
        {
            categories.map((cb)=>(
                <li key={cb}>{cb}</li>
            ))
        }
        </ul>

    {/* select */}
        <select>
            {
                categories.map((cb)=>(
                    <option key={cb}>
                        {cb}
                    </option>
                ))
            }
        </select>

        {/* table */}

        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Categories of Item</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((cb)=>(
                        <tr key={cb}>
                            <td className="d-flex justify-content-between">
                                <span>{cb}</span>
                             <button className="btn btn-danger bi bi-trash"></button>
                             </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

           

    </div>
  );
}
