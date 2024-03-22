
import { useDispatch, useSelector } from "react-redux"
import { removefromcart } from "../STORE/cartslice"


export default function Cart(){
    const items = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

   function handleremovefromcart(itemid){
         dispatch(removefromcart(itemid));
   }

return(
    <div className="cartWrapper">
                    {items.map((item)=>{
                     return <div className="cartCard">
                            <img src={item.image} alt="product" />
                            <h5>{item.title}</h5>
                            <h5>Price : ${item.price}</h5>
                            <button onClick={()=>handleremovefromcart(item.id)} className="remove-btn">Remove from Cart</button>
                </div> 
                    })}
            
                </div>   
)
}