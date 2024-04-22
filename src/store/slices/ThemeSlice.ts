/** @format */

import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = { isThemeChanged: true };

const ThemeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    changeTheme(state) {
      state.isThemeChanged = !state.isThemeChanged;
    },
  },
});

export const themeActions = ThemeSlice.actions;

export default ThemeSlice.reducer;
