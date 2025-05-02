import toast from "react-hot-toast";

export const handleRefundFunction = (
  refundData,
  dispatch,
  setRefundProcessing
) => {
  const {
    refundId,
    productName,
    returnQuantity,
    productCategory,
    purchaseDate,
    refundDate,
  } = refundData;

  if (
    !refundId ||
    !productName ||
    !returnQuantity ||
    !productCategory ||
    !purchaseDate ||
    !refundDate
  ) {
    toast.error("Please fill all fields");
    return;
  }
  if (returnQuantity <= 0) {
    toast.error("Return quantity must be greater than 0");
    return;
  }

  if (isNaN(returnQuantity)) {
    toast.error("Return quantity must be a number");
    return;
  }

  dispatch(
    setRefundProcessing({
      refundId,
      productName,
      returnQuantity,
      productCategory,
      purchaseDate,
      refundDate,
    })
  );
  toast.success("Refund processed successfully!");
  return true;
};

export const handleClearRefund = (
  setRefundId,
  setProductName,
  setReturnQuantity,
  setProductCategory,
  setPurchaseDate,
  setRefundDate
) => {
  setRefundId("");
  setProductName("");
  setReturnQuantity("");
  setProductCategory("");
  setPurchaseDate("");
  setRefundDate("");
};
