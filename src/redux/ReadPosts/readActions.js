import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchShowPosts } from "./readAPI";

export const showPosts = createAsyncThunk(
    'read/readPosts',
    async (id, { dispatch }) => {
        try {
            const response = await fetchShowPosts(id);
            dispatch({
                type: 'read/showPosts',
                payload: response.data.post
            });
        } catch (error) {
            console.log("ERROR!!!");
        }
    }
);