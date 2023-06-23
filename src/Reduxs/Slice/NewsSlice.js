import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base } from '../../Extentions/LoadEnvirontment';
import { notification } from "antd";

export const getAllNews = createAsyncThunk('/news/all', async({page}) => {
    let result = await axios.get(`${base}/api/v1/news?page=${page}`);
    return result.data;
});

const NewsSLice = createSlice({
    name: 'NewsSlice',
    initialState:{
        isLoading: false,
        data: []
    },
    extraReducers: {
        [getAllNews.pending]: (state) => {state.isLoading = true},
        [getAllNews.rejected]: (state) => {
            state.isLoading = false;
            notification.error({message: 'Server Error'});
        },
        [getAllNews.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        }
    }
});

export default NewsSLice.reducer;