import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Initialize as an empty array

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    // Add a new inventory item
    setInventory: (state, action) => {
      state.push(action.payload); // Add new item to the array
    },

    // Remove an inventory item by productCode
    removeInventory: (state, action) => {
      return state.filter((item) => item.productCode !== action.payload);
    },

    // Update an inventory item by productCode
    updateTable: (state, action) => {
      const index = state.findIndex(
        (item) => item.productCode === action.payload.productCode
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // Update the item
      }
    },
  },
});

export const { setInventory, removeInventory, updateTable } =
  inventorySlice.actions;
export default inventorySlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];
// // productName: "",
// // category: "",
// // brand: "",
// // size: "",
// // color: "",
// // price: "",
// // quantity: "",
// // productCode: "",

// const inventorySlice = createSlice({
//   name: "inventory",
//   initialState,
//   reducers: {
//     setInventory: (state, action) => {
//       const {
//         productName,
//         category,
//         brand,
//         size,
//         color,
//         price,
//         quantity,
//         productCode,
//       } = action.payload;
//       state.productName = productName;
//       state.category = category;
//       state.brand = brand;
//       state.size = size;
//       state.color = color;
//       state.price = price;
//       state.quantity = quantity;
//       state.productCode = productCode;
//     },
//     removeInventory: (state) => {
//       state.productName = "";
//       state.category = "";
//       state.brand = "";
//       state.size = "";
//       state.color = "";
//       state.price = "";
//       state.quantity = "";
//       state.productCode = "";
//     },
//     updateTable: (state, action) => {
//       state.productName = action.payload.productName;
//       state.category = action.payload.category;
//       state.brand = action.payload.brand;
//       state.size = action.payload.size;
//       state.color = action.payload.color;
//       state.price = action.payload.price;
//       state.quantity = action.payload.quantity;
//       state.productCode = action.payload.productCode;
//     },
//   },
// });

// export const { setInventory, removeInventory, updateTable } =
//   inventorySlice.actions;
// export default inventorySlice.reducer;
