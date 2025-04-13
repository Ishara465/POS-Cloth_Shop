import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice.js";
import reminderSlice from "./slices/reminderSlice.js";
import customerSlice from "./slices/customerSlice.js";

const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    reminder: reminderSlice,
    customer: customerSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
