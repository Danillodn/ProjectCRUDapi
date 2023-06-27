import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddPosts } from "./addAPI";

export const addPosts = createAsyncThunk(
    'add/addPosts',
    async (data, { dispatch }) => {
        try {
            const response = await fetchAddPosts(data);
            dispatch({
                type: 'add/addPosts',
                payload: response.data.posts
            });
        } catch (error) {
            console.log("ERROR!!!");
        }
    }
);