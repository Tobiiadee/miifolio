/** @format */

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ThemeSlice";
import authReducer from "./slices/Authentication"
import phoneNavReducer from "./slices/PhoneNavSlice";

export type RootStateType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    phoneNav: phoneNavReducer,
  },
});

export default store;
