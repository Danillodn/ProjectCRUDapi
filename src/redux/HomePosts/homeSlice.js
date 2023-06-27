import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});


export const { getPosts, deletePosts } = postsSlice.actions;

export default postsSlice.reducer;
