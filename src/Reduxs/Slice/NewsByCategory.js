import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base } from "../../Extentions/LoadEnvirontment";
import axios from "axios";
import { notification } from "antd";

export const getNewsByCategory = createAsyncThunk('/news/category', async({id, page}) => {
    let result = await axios.get(`${base}/api/get/news/category?page=${page}&categoryId=${id}`);
    return result.data;
});

const NewsByCategorySlice = createSlice({
    name: 'NewsByCategorySlice',
    initialState:{
        isLoading: false,
        data: []
    },
    extraReducers: {
        [getNewsByCategory.pending]: (state) => {state.isLoading = true},
        [getNewsByCategory.rejected]: (state) => {
            state.isLoading = false;
            notification.error({message: 'Server Error'});
        },
        [getNewsByCategory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        }
    }
});

export default NewsByCategorySlice.reducer;