import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/postSlice";
import platformReducer from "../features/platformSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    platform: platformReducer,
    search: searchReducer,
  },
});