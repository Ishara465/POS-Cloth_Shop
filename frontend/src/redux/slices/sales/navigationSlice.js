import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "Home",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = navigationSlice.actions;
export default navigationSlice.reducer;
