import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
};

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        editPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { editPosts, showPosts1 } = editSlice.actions;

export default editSlice.reducer;