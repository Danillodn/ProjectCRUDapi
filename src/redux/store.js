import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './HomePosts/homeSlice';
import readReducer from './ReadPosts/readSlice';
import addReducer from './AddPosts/addSlice';
import editReducer from './EditPosts/editSlice';

const store = configureStore({
    reducer: {
      posts: postsReducer,
      read: readReducer,
      add: addReducer,
      edit: editReducer,
    }
  });

export default store;