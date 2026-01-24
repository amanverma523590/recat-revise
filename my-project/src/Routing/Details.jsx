import { useParams } from "react-router-dom"


export function Details(){

    let params = useParams();

    return(
        <div>
            <h3>Deails</h3>
            <p>Id:{params.id } <br />
                Name:{params.name} <br />
                Price:{params.price} <br />
                Stock:{(params.stock==="true")? "Avialable": "Not Avialable"} <br />
            
            </p>
        </div>
    )
}