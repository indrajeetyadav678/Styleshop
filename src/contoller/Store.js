import { configureStore } from "@reduxjs/toolkit";
import Addcartreducer from "./AddcartSlice";
import Adddetailreducer from "./OrderedSlice";
import Addlikereducer from "./AddlikeSlice";
 
const store = configureStore({
    reducer: {
        mycart: Addcartreducer,
        myorder: Adddetailreducer,
        mylike: Addlikereducer,
    }
});

export default store;
