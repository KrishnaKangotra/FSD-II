import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    addPost: (state, action) => {
      state.posts.push({
        id: Date.now(),
        text: action.payload,
      });
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },

    updatePost: (state, action) => {
      const post = state.posts.find(
        (post) => post.id === action.payload.id
      );

      if (post) {
        post.text = action.payload.text;
      }
    },
  },
});

export const {
  addPost,
  deletePost,
  updatePost,
} = postSlice.actions;

export default postSlice.reducer;