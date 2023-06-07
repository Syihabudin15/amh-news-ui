import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "../Slice/NewsSlice";
import NewsByCategory from "../Slice/NewsByCategory";
import Category from "../Slice/Category";

export default configureStore({
    reducer: {
        news: NewsSlice,
        newsCategory: NewsByCategory,
        category: Category
    }
});