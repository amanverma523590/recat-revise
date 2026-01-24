import { useState } from "react"
import { useParams } from "react-router-dom"


export function Mobile(){

    const[mobiles,setmobiles] = useState([ {Name:'Google Pixel 6a',Category:"Google"},{Name:'Iphone 17pro',Category:"Iphone"} ])

    let params = useParams();

    return(
        <div>
          <h4>mobiles Result for {params.category?.toLowerCase()}</h4>
          <table width="400" border='1'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    mobiles.filter(mobile=> mobile.Category.toLowerCase()===params.category?.toLowerCase() ).map((item)=>
                        <tr key={item.Name}>
                            <td>{item.Name}</td>
                            <td>{item.Category}</td>
                        </tr>
                    )
                }
            </tbody>
          </table>
        </div>
    )
}