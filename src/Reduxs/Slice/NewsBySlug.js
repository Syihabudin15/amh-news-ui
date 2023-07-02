import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base } from "../../Extentions/LoadEnvirontment";

export const getNewsBySlug = createAsyncThunk('/news/slug', async(slug) => {
    const result = await axios.get(`${base}/api/v1/news/slug/${slug}`);
    return result.data;
});

const NewsBySlugSlice = createSlice({
    name: 'NewsBySlugSlice',
    initialState: {
        isLoading: false,
        data: {}
    },
    extraReducers: {
        [getNewsBySlug.rejected]: (state) => {
            state.isLoading = false;
        },
        [getNewsBySlug.pending]: (state) => {
            state.isLoading = true;
        },
        [getNewsBySlug.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        }
    }
});

export default NewsBySlugSlice.reducer;