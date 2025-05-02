import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const refundProcessingSlice = createSlice({
  name: "refundProcessing",
  initialState,
  reducers: {
    setRefundProcessing: (state, action) => {
      state.push(action.payload);
    },
    removeRefundProcessing: (state, action) => {
      return state.filter((item) => item.refundId !== action.payload.refundId);
    },
    updateRefundProcessing: (state, action) => {
      const index = state.findIndex(
        (item) => item.refundId === action.payload.refundId
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const {
  setRefundProcessing,
  removeRefundProcessing,
  updateRefundProcessing,
} = refundProcessingSlice.actions;
export default refundProcessingSlice.reducer;
