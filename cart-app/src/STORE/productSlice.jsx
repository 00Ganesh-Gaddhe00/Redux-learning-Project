import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'



const ProductSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:'success'
    },
    // reducers:{
    //     setProducts(state,action){
    //         return {...state, data:action.payload}
    //     },
    //     setStatus(state, action){
    //         return {...state, status:action.payload}
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(FetchProducts.pending,(state)=>{
            return{...state,status:'loading'}
        }).addCase(FetchProducts.fulfilled,(state,action)=>{
            return{data:action.payload,status:"success"}
        }).addCase(FetchProducts.rejected,(state)=>{
            return{...state,status:"error"}
        })
    }
})

export const {setProducts,setStatus} = ProductSlice.actions;

export default ProductSlice.reducer

//thunk -> A function which wraps another function

// export function FetchProducts(){
//     return async function(dispatch){
//         dispatch(setStatus('..loading'))
    
//     try{
//         let res = await axios.get('https://fakestoreapi.com/products');
//         dispatch(setProducts(res.data))
//         dispatch(setStatus("success"));
//     }catch(error){
//         dispatch(setStatus("error"))
//     }
// }
// }

export const FetchProducts = createAsyncThunk('product', async()=>{
    let res = await axios.get('https://fakestoreapi.com/products');
    return res.data 
})