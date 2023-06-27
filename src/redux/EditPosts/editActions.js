import { createAsyncThunk  } from "@reduxjs/toolkit";
import { fetchEditPosts, fetchShowPosts1 } from "./editAPI";

export const editPosts = createAsyncThunk(
    'edit/editPosts',
    async ({data, id}, {dispatch}) => {
        try {
            const response = await fetchEditPosts(data, id);
            dispatch({
                type: 'edit/editPosts',
                payload: response.data.post
            });
        } catch (error) {
            console.log("ERROR!!!");
        }  
    }
);

export const showPosts1 = createAsyncThunk(
    'edit/editPosts',
    async ( {id, reset}, { dispatch }) => {
        try {
           await fetchShowPosts1(id,reset);
        } catch (error) {
            console.log("ERROR!!!");
        }
    }
);