const { default: mongoose } = require("mongoose");
const Supplier = require("../models/supplierModel.js");
const createHttpError = require("http-errors");

const addSupplier = async (req, res, next) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res
      .status(201)
      .json({ success: true, message: "supplier created", data: supplier });
  } catch (error) {
    next(error);
  }
};

const getSupplierId = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid id!");
      return next(err);
    }

    const supplier = await Supplier.findById(id);

    if (!supplier) {
      const err = createHttpError(404, "supplier not found");
      return next(err);
    }

    res.status(200).json({ success: true, date: supplier });
  } catch (error) {
    next(error);
  }
};

const getSuppliers = async (req, res, next) => {
  try {
    const supplier = await Supplier.find();
    res.status(200).json({ success: true, data: supplier });
  } catch (error) {
    next(error);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const { name, phone, email } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id!");
      return next(err);
    }

    const supplier = await Supplier.findByIdAndUpdate(
      id,
      {
        name,
        phone,
        email,
      },
      { new: true }
    );

    if (!supplier) {
      const err = createHttpError(404, "supplier not found!");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "supplier Update successfully",
      data: supplier,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id");
      return next(err);
    }

    const supplier = await Supplier.findByIdAndDelete(id);

    if (!supplier) {
      const err = createHttpError(404, "supplier not found!");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "supplier delete successfully",
      data: supplier,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addSupplier,
  getSupplierId,
  getSuppliers,
  updateSupplier,
  deleteSupplier,
};
