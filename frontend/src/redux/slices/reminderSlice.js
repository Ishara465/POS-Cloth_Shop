import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    setReminder: (state, action) => {
      state.push(action.payload);
    },

    removeReminder: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },

    updateReminder: (state, action) => {
      const index = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { setReminder, removeReminder, updateReminder } =
  reminderSlice.actions;
export default reminderSlice.reducer;
