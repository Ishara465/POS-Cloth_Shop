import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice.js";
import reminderSlice from "./slices/reminderSlice.js";
import customerSlice from "./slices/customerSlice.js";
import refundProcessingSlice from "./slices/return/refundProcessing.js";
import returnAndRefundSlice from "./slices/return/returnAndRefundSlice.js";

const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    reminder: reminderSlice,
    customer: customerSlice,
    refundProcessing: refundProcessingSlice,
    returnAndRefund: returnAndRefundSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
