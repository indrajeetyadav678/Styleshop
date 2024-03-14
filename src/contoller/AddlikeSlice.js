import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: [],
}

const AddlikeSlice = createSlice({
    name: "mylike",
    initialState: initialState,
    reducers: {
        addtolikes: (state, action) => {
            const addprod = state.likes.some(item => item.id === action.payload.id);
            if (!addprod) {
                state.likes.push(action.payload);
            }
        },
        delet: (state, action) => {
            state.likes = state.likes.filter(item => item.id !== action.payload);
        }
    }
});

export const { addtolikes, delet } = AddlikeSlice.actions;
export default AddlikeSlice.reducer;
