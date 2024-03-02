import { configureStore } from "@reduxjs/toolkit";
import Addcartreducer from "./AddcartSlice";
 
const Store=configureStore({
 reducer:{
    mycart:Addcartreducer,
 }
});
export default Store;