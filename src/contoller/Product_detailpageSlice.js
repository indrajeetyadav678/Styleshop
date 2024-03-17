import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    call_product_deatil:[],
 }

const Product_detailpageSlice=createSlice({
    name:"mydatailpage",
    initialState:initialState,
    reducers:{
        Detailpage_call:(state,action)=>{
            state.call_product_deatil.push(action.payload);
        },
        remove:(state,action)=>{
            state.call_product_deatil = state.call_product_deatil.filter(item => item.id === action.payload.id);
        }
    }
})
export const {Detailpage_call,remove}=Product_detailpageSlice.actions;
export default Product_detailpageSlice.reducer;