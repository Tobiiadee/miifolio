/** @format */

import { createSlice } from "@reduxjs/toolkit";

const PhoneNavSlice = createSlice({
  name: "phoneNavSlice",
  initialState: { activeNav: false },
  reducers: {
    onActiveNav(state) {
      state.activeNav = !state.activeNav;
    },
  },
});

export const PhoneNavActions = PhoneNavSlice.actions;

export default PhoneNavSlice.reducer;
