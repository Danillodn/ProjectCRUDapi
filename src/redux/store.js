import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './HomePosts/homeSlice';

const store = configureStore({
    reducer: {
      posts: postsReducer
    }
  });

export default store;