import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base } from "../../Extentions/LoadEnvirontment";

export const getAllUser = createAsyncThunk('/all-user', async () => {
    const result = await axios.get(`${base}/api/v1/users`);
    return result.data;
});

const AllUserSlice = createSlice({
    name: 'AllUserSlice',
    initialState: {
        loading: false,
        all: []
    },
    extraReducers: {
        [getAllUser.pending]: (state) => {
            state.loading = true;
        },
        [getAllUser.rejected]: (state) => {
            state.loading = false;
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.all = action.payload.data;
        }
    }
});

export default AllUserSlice.reducer;