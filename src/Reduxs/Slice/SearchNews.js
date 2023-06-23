import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
import { base } from "../../Extentions/LoadEnvirontment";
import axios from "axios";

export const searchNews = createAsyncThunk('/news/search', async(title, page) => {
    const result = await axios.get(`${base}/api/v1/news/title?title=${title}&page=${page}`);
    return result.data;
});

const SearchNewsSlice = createSlice({
    name: 'SearchNewsSlice',
    initialState: {
        loading: false,
        dataSearch: []
    },
    extraReducers: {
        [searchNews.rejected]: (state) => {
            state.loading = false;
            notification.error({message: 'Connection Timed Out'});
        },
        [searchNews.pending]: (state) => {
            state.loading = true;
        },
        [searchNews.fulfilled]: (state, action) => {
            state.loading = false;
            state.dataSearch = action.payload.data;
        }
    }
});

export default SearchNewsSlice.reducer;