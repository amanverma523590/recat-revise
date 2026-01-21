import { useContext, useEffect, useState } from "react"
import { searchContext } from "./ProductSearch";
import axios from 'axios'



 export function MainComponent(){

    let search = useContext(searchContext);

    const[products,setProducts] = useState([{id:0, title:'', category:'',price:0, discription:'',image:null,rating:{rate:0,count:0}}]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${search}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[search]);

    return(
        <div>
            <div className="h5">searchResult</div>
            <main className="d-flex flex-wrap">
                {
                  products.map((product)=> 
                    <div key={product.id} className="card p-2 m-2 " style={{width:'200px'}}>
                        <img className="card-img-top" height='120' src={product.image ? product.image : "no image"} />
                        <div className="card-header">
                            {product.title}
                        </div>
                        <div className="card-body">
                            ${product.price}
                        </div>
                    </div>
                 )
                }
            </main>
        </div>
    )
}