import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListPosts, fetchDeletePosts } from "../HomePosts/homeAPI";

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (parms, { dispatch }) => {
    try {
      const response = await fetchListPosts();
      dispatch({
        type: 'posts/getPosts',
        payload: response.data.posts
      });
    } catch (error) {
      console.log("ERROR!!!");
    }
  }
);

export const deletePosts = createAsyncThunk(
  'posts/deletePosts',
  async (id, { dispatch }) => {
    try {
      await fetchDeletePosts(id);
      dispatch(getPosts());
    } catch (error) {
      console.log("ERROR!!!");
    }
  }
);