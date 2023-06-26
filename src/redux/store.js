import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './HomePosts/homeSlice';
import readReducer from './ReadPosts/readSlice';


const store = configureStore({
    reducer: {
      posts: postsReducer,
      read: readReducer,
    }
  });

export default store;