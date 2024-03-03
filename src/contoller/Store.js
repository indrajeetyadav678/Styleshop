import { configureStore } from "@reduxjs/toolkit";
import Addcartreducer from "./AddcartSlice";
import Adddetailreducer from "./OrderedSlice";
 
const Store=configureStore({
 reducer:{
    mycart:Addcartreducer,
    myorder:Adddetailreducer,
 }
});
export default Store;