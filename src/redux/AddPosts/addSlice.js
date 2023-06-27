import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addPosts: (state, action) => {
    },
  },
});

export const { addPosts } = addSlice.actions;

export default addSlice.reducer;