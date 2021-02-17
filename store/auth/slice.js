import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'AuthAction',
  initialState: {
    user: {},
    loading: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.loading = true;
    },
    loginUserSuccess: (state, action) => {
      state.items = { ...action.payload };
      state.loading = false;
    },
    loginUserFail: (state, action) => {},
    signInUser: (state, action) => {
      state.loading = true;
    },
    signInUserSuccess: (state) => {
      state.loading = false;
    },
    signInUserFail: (state) => {
      state.loading = false;
    },
    signOut: (state) => {
      state.loading = true;
    },
    signOutSuccess: (state) => {
      state.loading = false;
    },
    signOutFail: (state) => {
      state.loading = false;
    },
  },
});

export const {
  loginUser,
  loginUserFail,
  loginUserSuccess,
  signInUser,
  signInUserFail,
  signInUserSuccess,
  signOut,
  signOutFail,
  signOutSuccess
} = authSlice.actions;

export default authSlice.reducer;
