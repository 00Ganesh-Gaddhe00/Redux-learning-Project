import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'



const ProductSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:'success'
    },
    reducers:{
        setProducts(state,action){
            return {...state, data:action.payload}
        },
        setStatus(state, action){
            return {...state, status:action.payload}
        }
    }
})

export const {setProducts,setStatus} = ProductSlice.actions;

export default ProductSlice.reducer

//thunk -> A function which wraps another function

export function FetchProducts(){
    return async function(dispatch){
        dispatch(setStatus('..loading'))
    
    try{
        let res = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(res.data))
        dispatch(setStatus("success"));
    }catch(error){
        dispatch(setStatus("error"))
    }
}
}