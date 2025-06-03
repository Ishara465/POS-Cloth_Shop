const express = require("express");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const {
  addProduct,
  getProductId,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");

const router = express.Router();

router.route("/add").post(isVerifiedUser, addProduct);
router.route("/getById/:id").get(isVerifiedUser, getProductId);
router.route("/getProducts").get(isVerifiedUser, getProducts);
router.route("/pUpdate/:id").put(isVerifiedUser, updateProduct);
router.route("/pDelete/:id").delete(isVerifiedUser, deleteProduct);

module.exports = router;
