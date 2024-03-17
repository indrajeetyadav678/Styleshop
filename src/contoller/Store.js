import { configureStore } from "@reduxjs/toolkit";
import Addcartreducer from "./AddcartSlice";
import Adddetailreducer from "./OrderedSlice";
import Addlikereducer from "./AddlikeSlice";
import Customerdatareducer from "./Login_outSlice";
import detailpagereducer from "./Product_detailpageSlice";
 
const store = configureStore({
    reducer: {
        mycart: Addcartreducer,
        myorder: Adddetailreducer,
        mylike: Addlikereducer,
        mylogdata:Customerdatareducer,
        mydatailpage:detailpagereducer,
    }
});

export default store;
