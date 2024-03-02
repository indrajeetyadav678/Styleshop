import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
}
const AddcartSlice = createSlice({
    name: "mycart",
    initialState: initialState,     
    reducers: {
        addtocart: (state, action) => {
            var myitem = state.cart.filter((key) => key.id === action.payload.id);
            if (myitem.length >= 1) {
                alert("This product Already Added!");
            }
            else {
                state.cart.push(action.payload);
            }
        },
        increment: (state, action) => {
            for (var i = 0; i < state.cart.length; ++i) {
                if (state.cart[i].id === action.payload) {
                    state.cart[i].quantity++;
                }
            }
        },
        decrement: (state, action) => {
            for (var i = 0; i < state.cart.length; ++i) {
                if (state.cart[i].id === action.payload) {
                    if (state.cart[i].quantity > 1) {
                        state.cart[i].quantity--;
                    }
                    else {
                        alert("your product Quantity atleast 1")
                    }

                }

            }
        },
        delet: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }

});
export const { addtocart,increment, decrement,delet } = AddcartSlice.actions;
export default AddcartSlice.reducer;