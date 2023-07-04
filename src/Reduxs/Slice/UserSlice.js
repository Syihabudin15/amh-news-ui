import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { base } from "../../Extentions/LoadEnvirontment";

export const setUser = createAsyncThunk('/setUser', async() => {
    const token = Cookies.get('token');
    const result = await axios.request({
        method: 'GET',
        url: `${base}/api/v1/user`,
        headers: {
            'Accept': 'application/json',
            'token': token
        }
    });
    return result.data.data;
});

export const removeUser = createAsyncThunk('/logout', () => {
    Cookies.remove('token');
});

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {
        userId: null,
        fName: null,
        lName: null,
        email: null,
        phone: null,
        role: null,
    },
    extraReducers: {
        [setUser.fulfilled]: (state, action) => {
            state.userId = action.payload._id;
            state.fName = action.payload.first_name;
            state.lName = action.payload.last_name;
            state.email = action.payload.m_credential.email;
            state.role = action.payload.m_credential.m_role.role;
            state.phone = action.payload.phone;
        },
        [removeUser.fulfilled]: (state) => {
            state.userId = null;
            state.fName = null;
            state.lName = null;
            state.email = null;
            state.role = null;
            state.phone = null;
        }
    }
});

export default UserSlice.reducer;