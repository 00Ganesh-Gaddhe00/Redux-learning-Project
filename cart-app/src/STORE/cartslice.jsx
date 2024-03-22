import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart(state,action){
              return [...state, action.payload]
        },
        removefromcart(state, action){
             return state.filter((item)=>item.id!==action.payload)
        }
    }
})
export const {addtocart,removefromcart} = cartSlice.actions;
export default cartSlice.reducer