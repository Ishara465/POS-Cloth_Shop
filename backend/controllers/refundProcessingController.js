const { default: mongoose } = require("mongoose");
const RFProcessing = require("../models/refundProcessingModel.js");
const createHttpError = require("http-errors");

const addRFProcessing = async (req, res, next) => {
  try {
    const rfProcessing = new RFProcessing(req.body);
    await rfProcessing.save();

    res.status(201).json({
      success: true,
      message: "RefundProcessing created",
      data: rfProcessing,
    });
  } catch (error) {
    next(error);
  }
};

const getRFProcessingById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid id!");
      return next(err);
    }

    const rfProcessing = await RFProcessing.findById(id);

    if (!RFProcessing) {
      const err = createHttpError(404, "RFProcessing not found!");
      return next(err);
    }

    res.status(200).json({ success: true, data: rfProcessing });
  } catch (error) {
    next(error);
  }
};

const getAllRFProcessing = async (req, res, next) => {
  try {
    const rfProcessing = await RFProcessing.find();
    res.status(200).json({ success: true, data: rfProcessing });
  } catch (error) {
    next(error);
  }
};

const getRFProcessingUpdate = async (req, res, next) => {
  try {
    const { productName, returnQuantity, productCategory } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id!");
      return next(err);
    }

    const rfProcessing = await RFProcessing.findByIdAndUpdate(
      id,
      {
        productName,
        returnQuantity,
        productCategory,
      },
      { new: true }
    );

    if (!rfProcessing) {
      const err = createHttpError(404, "RF not found!");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "RF update successfully",
      data: rfProcessing,
    });
  } catch (error) {
    next(error);
  }
};

const deleteRFProcessing = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id");
      return next(err);
    }

    const rfProcessing = await RFProcessing.findByIdAndDelete(id);

    if (!rfProcessing) {
      const err = createHttpError(404, "RF not found");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "RF delete successfully",
      data: rfProcessing,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addRFProcessing,
  getAllRFProcessing,
  getRFProcessingById,
  getRFProcessingUpdate,
  deleteRFProcessing,
};
