import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    setSupplier: (state, action) => {
      state.push(action.payload);
    },

    removeSupplier: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateSupplier: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { setSupplier, removeSupplier, updateSupplier } =
  supplierSlice.actions;
export default supplierSlice.reducer;
