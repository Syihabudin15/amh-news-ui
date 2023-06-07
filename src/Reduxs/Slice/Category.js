import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base } from "../../Extentions/LoadEnvirontment";
import { notification } from "antd";

export const getAllCategory = createAsyncThunk('/get/category/all', async(page) => {
    let result = await axios.get(`${base}/api/get/category?page=${page}`);
    return result.data;
});

const CategorySlice = createSlice({
    name: 'CategorySlice',
    initialState: {
        isLoading: false,
        data: []
    },
    extraReducers: {
        [getAllCategory.pending]: (state) => {state.isLoading = true},
        [getAllCategory.rejected]: (state) => {
            state.isLoading = false;
            notification.error({message: 'Server Error'});
        },
        [getAllCategory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        }
    }
});

export default CategorySlice.reducer;