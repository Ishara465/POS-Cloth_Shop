const { default: mongoose } = require("mongoose");
const Product = require("../models/product.Model.js");
const createHttpError = require("http-errors");

const addProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res
      .status(201)
      .json({ success: true, message: "Product created", data: product });
  } catch (error) {
    next(error);
  }
};

const getProductId = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid id!");
      return next(err);
    }

    const product = await Product.findById(id);

    if (!product) {
      const err = createHttpError(404, "Order not found");
      return next(err);
    }

    res.status(200).json({ success: true, date: product });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const {
      productName,
      category,
      brand,
      size,
      color,
      price,
      quantity,
      productCode,
      productStatus,
    } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id!");
      return next(err);
    }

    const product = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        category,
        brand,
        size,
        color,
        price,
        quantity,
        productCode,
        productStatus,
      },
      { new: true }
    );

    if (!product) {
      const err = createHttpError(404, "Product not found!");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "Product Update successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id");
      return next(err);
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      const err = createHttpError(404, "Product not found!");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "Product delete successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  getProductId,
  getProducts,
  updateProduct,
  deleteProduct,
};
