import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice.js";
import reminderSlice from "./slices/reminderSlice.js";

const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    reminder: reminderSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
