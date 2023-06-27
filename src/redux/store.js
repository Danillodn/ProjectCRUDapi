import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './HomePosts/homeSlice';
import readReducer from './ReadPosts/readSlice';
import addReducer from './AddPosts/addSlice'

const store = configureStore({
    reducer: {
      posts: postsReducer,
      read: readReducer,
      add: addReducer,
    }
  });

export default store;