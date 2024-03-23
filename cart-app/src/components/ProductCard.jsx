import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from "../STORE/cartslice";
import { FetchProducts } from "../STORE/productSlice.jsx";


export default function Product(){
    const {data,status} = useSelector((state)=>state.products)
    
    const dispatch = useDispatch();

    function handleaddtocart(product){
        dispatch(addtocart(product));
    }

    useEffect(()=>{
       dispatch(FetchProducts());

    },[])
    if(status === 'loading'){
        return(
            <h2>...Loading</h2>
        )
    }else if(status ==='error'){
        return(
            <h2>OOPs, something went wrong!</h2>
        )
    }
    return(
        <div className="productsWrapper">
         {data.map((product)=>{
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