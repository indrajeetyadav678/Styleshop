import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    likes: [],
}
const AddlikeSlice = createSlice({
    name: "mylike",
    initialState: initialState,
    reducers: {
        addtolikes: (state, action) => {
            if (action.payload.length >= 1) {
                alert("This product Already Added!");
            }
            else {
                state.likes.push(action.payload);
            }
        },
        delet: (state, action) => {
            state.likes = state.likes.filter(item => item.id !== action.payload)
            // state.likes.find(action.payload)
        }
    }

});
export const { addtolikes, delet } = AddlikeSlice.actions;
export default AddlikeSlice.reducer;