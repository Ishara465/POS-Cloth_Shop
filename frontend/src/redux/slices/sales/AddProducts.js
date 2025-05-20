import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const AddProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    setAddProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.productId !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { setAddProduct, removeProduct, updateProduct } =
  AddProductSlice.actions;
export default AddProductSlice.reducer;
