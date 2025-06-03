const express = require("express");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const {
  addCustomer,
  getCustomerId,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const router = express.Router();

router.route("/add").post(isVerifiedUser, addCustomer);
router.route("/getById/:id").get(isVerifiedUser, getCustomerId);
router.route("/getCustomers").get(isVerifiedUser, getCustomers);
router.route("/cUpdate/:id").put(isVerifiedUser, updateCustomer);
router.route("/cDelete/:id").delete(isVerifiedUser, deleteCustomer);

module.exports = router;
