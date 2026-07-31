import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlatform: "LinkedIn",
};

const platformSlice = createSlice({
  name: "platform",

  initialState,

  reducers: {
    changePlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
  },
});

export const { changePlatform } = platformSlice.actions;

export default platformSlice.reducer;