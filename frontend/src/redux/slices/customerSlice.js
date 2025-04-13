import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.push(action.payload);
    },
    removeCustomer: (state, action) => {
      return state.filter((item) => item.code !== action.payload); // Use `_id` or `id` based on your data structure
    },
    updateCustomer: (state, action) => {
      const index = state.findIndex(
        (item) => item.code === action.payload.code
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { setCustomer, removeCustomer, updateCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
