import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "../Slice/NewsSlice";
import NewsByCategory from "../Slice/NewsByCategory";
import Category from "../Slice/Category";
import SearchNewsSlice from "../Slice/SearchNews";

export default configureStore({
    reducer: {
        news: NewsSlice,
        searchNews: SearchNewsSlice,
        newsCategory: NewsByCategory,
        category: Category
    }
});