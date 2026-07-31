import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  editingPost: null,
};

const postSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: Date.now(),
        text: action.payload.text,
        platform: action.payload.platform,
      };

      state.items.push(newPost);
    },

    deletePost: (state, action) => {
      state.items = state.items.filter(
        (post) => post.id !== action.payload
      );
    },

    startEditing: (state, action) => {
      state.editingPost = action.payload;
    },

    clearEditing: (state) => {
      state.editingPost = null;
    },

    updatePost: (state, action) => {
      const post = state.items.find(
        (post) => post.id === action.payload.id
      );

      if (post) {
        post.text = action.payload.text;
        post.platform = action.payload.platform;
      }

      state.editingPost = null;
    },
  },
});

export const {
  addPost,
  deletePost,
  startEditing,
  clearEditing,
  updatePost,
} = postSlice.actions;

export default postSlice.reducer;