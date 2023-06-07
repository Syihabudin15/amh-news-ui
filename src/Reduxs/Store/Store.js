import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "../Slice/NewsSlice";

export default configureStore({
    reducer: {
        news: NewsSlice
    }
});