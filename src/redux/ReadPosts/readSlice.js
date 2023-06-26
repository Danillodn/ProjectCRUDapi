import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const readSlice = createSlice({
  name: 'read',
  initialState,
  reducers: {
    showPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { showPosts } = readSlice.actions;

export default readSlice.reducer;