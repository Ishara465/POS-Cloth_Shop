const mongoose = require("mongoose");
const refundProcessingSchema = new mongoose.Schema(
  {
    refundId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    returnQuantity: {
      type: Number,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    purchaseDate: {
      type: String,
      required: true,
    },
    refundDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RefundProcessing", refundProcessingSchema);
