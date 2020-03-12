import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  post: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: state => {
      state.loading = true;
    },
    getPostSuccess: (state, { payload }) => {
      state.post = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

// Three actions generated from the slice
export const { getPost, getPostSuccess, getPostFailure } = postSlice.actions;

// A selector
export const postSelector = state => state.post;

// The reducer
export default postSlice.reducer;

// Asynchronous thunk action
export function fetchPost(id) {
  return async dispatch => {
    dispatch(getPost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();

      dispatch(getPostSuccess(data));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
}
