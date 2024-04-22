/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  isSignedIn: false,
  userData: {
    username: undefined,
    email: undefined,
    phoneNumber: undefined,
    idToken: undefined,
    error: { code: undefined },
  } ,
  isUserAuthenticated: false,
  isUserNotAuthenticated: false,
};

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {
    isSignedIn(state, action) {
      state.isSignedIn = true;

      // Sign in user data
      const signInData = action.payload;
      state.userData = signInData;

      //Sign in authentication
      const userError = action.payload.error?.code;
      const userIDToken = action.payload?.idToken;

      // console.log(userError, userIDToken);

      if (userError && userIDToken === undefined) {
        state.isUserAuthenticated = false;
        state.isUserNotAuthenticated = true;        
      }

      if (userError === undefined && userIDToken) {
        state.isUserAuthenticated = true;
        state.isUserNotAuthenticated = false;
        state.userData = {
          username: undefined,
          email: undefined,
          phoneNumber: undefined,
          idToken: undefined,
          error: { code: undefined },
        };
      }
    },
    isSignedOut(state) {
      state.isSignedIn = false;
      state.isUserAuthenticated = false;
      state.isUserNotAuthenticated;
    },
    isSignedUp(state, action) {
      state.isSignedIn = true;
      //Sign up user data
      const signUpData = action.payload;
      state.userData = signUpData;

      //Sign up authentication
      const userError = action.payload.error?.code;
      const userIDToken = action.payload?.idToken;

      if (userError && userIDToken === undefined) {
        state.isUserAuthenticated = false;
        state.isUserNotAuthenticated = true;
        state.userData = {
          username: undefined,
          email: undefined,
          phoneNumber: undefined,
          idToken: undefined,
          error: { code: undefined },
        };
      }

      if (userError === undefined && userIDToken) {
        state.isUserAuthenticated = true;
        state.isUserNotAuthenticated = false;
      }
    },
  },
});

export const authActions = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
