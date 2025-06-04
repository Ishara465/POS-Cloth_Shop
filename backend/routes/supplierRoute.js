const express = require("express");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const {
  addSupplier,
  getSupplierId,
  getSuppliers,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController.js");

const router = express.Router();

router.route("/add").post(isVerifiedUser, addSupplier);
router.route("/getById/:id").get(isVerifiedUser, getSupplierId);
router.route("/getSuppliers").get(isVerifiedUser, getSuppliers);
router.route("/sUpdate/:id").put(isVerifiedUser, updateSupplier);
router.route("/sDelete/:id").delete(isVerifiedUser, deleteSupplier);

module.exports = router;
