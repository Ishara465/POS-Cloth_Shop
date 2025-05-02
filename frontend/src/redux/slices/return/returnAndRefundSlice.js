import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const returnAndRefundSlice = createSlice({
  name: "returnAndRefund",
  initialState,
  reducers: {
    setReturnAndRefund: (state, action) => {
      state.push(action.payload);
    },
    removeReturnAndRefund: (state, action) => {
      return state.filter(
        (item) => item.receiptNumber === action.payload.receiptNumber
      );
    },
    updateReturnAndRefund: (state, action) => {
      const index = state.findIndex(
        (item) => item.receiptNumber === action.payload.receiptNumber
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const {
  setReturnAndRefund,
  removeReturnAndRefund,
  updateReturnAndRefund,
} = returnAndRefundSlice.actions;
export default returnAndRefundSlice.reducer;
