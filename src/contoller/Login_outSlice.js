import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

const initialState={
    customer:[],
}

const Login_outSlice=createSlice({
    name:"mylogdata",
    initialState:initialState,
    reducers:{
       Registration:(state, action)=>{
        state.customer.push(action.payload);
        alert("Registration successfully Done");
       },
       
    }
})
export const {Registration}=Login_outSlice.actions;
export default Login_outSlice.reducer;