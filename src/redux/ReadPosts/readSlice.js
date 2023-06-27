import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: {},
};

const readSlice = createSlice({
  name: 'read',
  initialState,
  reducers: {
    showPosts: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { showPosts } = readSlice.actions;

export default readSlice.reducer;