import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventorySlice.js";
import reminderSlice from "./slices/reminderSlice.js";
import customerSlice from "./slices/customerSlice.js";
import refundProcessingSlice from "./slices/return/refundProcessing.js";
import returnAndRefundSlice from "./slices/return/returnAndRefundSlice.js";
import supplierSlice from "./slices/supplier.js";
import AddProductSlice from "./slices/sales/AddProducts.js";
import navigationReducer from "./slices/sales/navigationSlice.js";

const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    reminder: reminderSlice,
    customer: customerSlice,
    refundProcessing: refundProcessingSlice,
    returnAndRefund: returnAndRefundSlice,
    supplier: supplierSlice,
    addProduct: AddProductSlice,
    navigation: navigationReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
