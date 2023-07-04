import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "../Slice/NewsSlice";
import NewsByCategory from "../Slice/NewsByCategory";
import Category from "../Slice/Category";
import SearchNewsSlice from "../Slice/SearchNews";
import NewsBySlugSlice from "../Slice/NewsBySlug";
import UserSlice from "../Slice/UserSlice";
import UnPosted from "../Slice/UnPosted";
import AllUserSlice from "../Slice/AllUserSlice";

export default configureStore({
    reducer: {
        news: NewsSlice,
        searchNews: SearchNewsSlice,
        newsSlug: NewsBySlugSlice,
        newsCategory: NewsByCategory,
        category: Category,
        user: UserSlice,
        allUser: AllUserSlice,
        unPosted: UnPosted
    }
});