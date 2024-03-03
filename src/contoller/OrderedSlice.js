import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orderdetail:[],
}

const OrderedSlice=createSlice({
    name:"myorder",
    initialState:initialState,

    reducers:{
        adddetail:((state,action)=>{
                state.orderdetail.push(action.payload);
        })
    }
});
export const {adddetail}=OrderedSlice.actions;
export default OrderedSlice.reducer;