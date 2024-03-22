import { useState, useEffect } from "react"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addtocart } from "../STORE/cartslice";

export default function Product(){
    
    const[products, setproducts] = useState([]);
    const dispatch = useDispatch();

    function handleaddtocart(product){
        dispatch(addtocart(product));
    }

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setproducts(res.data)
        })

    },[])

    return(
        <div className="productsWrapper">
         {products.map((product)=>{
           return <div className="card">
            <img src={product.image} alt="product"/>
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            <button onClick={()=>handleaddtocart(product)}  className="btn">Add to Cart</button>
        </div>
         })}
        
        </div>
    )
}