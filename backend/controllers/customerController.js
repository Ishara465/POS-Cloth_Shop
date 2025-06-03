const { default: mongoose } = require("mongoose");
const Customer = require("../models/customerModel.js");
const createHttpError = require("http-errors");

const addCustomer = async (req, res, next) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res
      .status(201)
      .json({ success: true, message: "Customer created", data: customer });
  } catch (error) {
    next(error);
  }
};

const getCustomerId = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid id!");
      return next(err);
    }

    const customer = await Customer.findById(id);

    if (!customer) {
      const err = createHttpError(404, "Customer not found!");
      return next(err);
    }

    res.status(200).json({ success: true, data: customer });
  } catch (error) {
    next(error);
  }
};

const getCustomers = async (req, res, next) => {
  try {
    const customer = await Customer.find();
    res.status(200).json({ success: true, data: customer });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { name, phone, email } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id!");
      return next(err);
    }

    const customer = await Customer.findByIdAndUpdate(
      id,
      {
        name,
        phone,
        email,
      },
      { new: true }
    );

    if (!customer) {
      const err = createHttpError(404, "Product not found!");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "Customer update successfully",
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = createHttpError(404, "Invalid Id");
      return next(err);
    }

    const customer = await Customer.findByIdAndDelete(id);

    if (!customer) {
      const err = createHttpError(404, "customer not found");
      return next(err);
    }

    res.status(200).json({
      success: true,
      message: "Customer delete successfully",
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCustomer,
  getCustomerId,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};
