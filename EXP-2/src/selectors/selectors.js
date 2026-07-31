import { createSelector } from "@reduxjs/toolkit";

export const selectPosts = (state) => state.posts.items;

export const selectSearch = (state) => state.search.search;

export const selectPlatformFilter = (state) =>
  state.search.filterPlatform;

export const filteredPosts = createSelector(
  [
    selectPosts,
    selectSearch,
    selectPlatformFilter,
  ],

  (posts, search, platform) => {

    return posts.filter((post) => {

      const matchesSearch =
        post.text
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPlatform =
        platform === "All" ||
        post.platform === platform;

      return matchesSearch && matchesPlatform;

    });

  }
);