import { createSlice } from "@reduxjs/toolkit";

// createSlice for users with our reducers
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    hasErrors: false
  },
  reducers: {
    getUsers: state => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

// export actions generated by slice
export const {
  getUsers,
  getUsersSuccess,
  getUsersFailure
} = usersSlice.actions;

// export users selector
export const usersSelector = state => state.users;

// export default reducer
export default usersSlice.reducer;

// fetch Users function for Asynchronous Thunk action
export function fetchUsers() {
  return async dispatch => {
    dispatch(getUsers());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}
