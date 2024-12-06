import { createSlice } from "@reduxjs/toolkit";

import { MENU_ITEMS } from "@/constants";

const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { menuItemClick } = menuSlice.actions;

export default menuSlice.reducer;
