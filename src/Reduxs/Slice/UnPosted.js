import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base } from '../../Extentions/LoadEnvirontment';
import Cookies from "js-cookie";

export const getAllUnposted = createAsyncThunk('/news/unposted', async (page) => {
    const result = await axios.request({
        method: 'GET',
        url: `${base}/api/v1/news/unposted?page=${page}`,
        headers: {
            'token': Cookies.get('token')
        }
    });
    return result.data;
});

const UnPostedSlice = createSlice({
    name: 'UnPostedSlice',
    initialState: {
        isLoading: false,
        data: []
    },
    extraReducers: {
        [getAllUnposted.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllUnposted.rejected]: (state) => {
            state.isLoading = false;
        },
        [getAllUnposted.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        }
    }
});

export default UnPostedSlice.reducer;