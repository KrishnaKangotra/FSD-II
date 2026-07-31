import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filterPlatform: "All",
};

const searchSlice = createSlice({
  name: "search",

  initialState,

  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },

    changeFilter: (state, action) => {
      state.filterPlatform = action.payload;
    },
  },
});

export const {
  changeSearch,
  changeFilter,
} = searchSlice.actions;

export default searchSlice.reducer;