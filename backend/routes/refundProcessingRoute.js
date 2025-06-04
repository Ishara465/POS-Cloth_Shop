const express = require("express");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const {
  addRFProcessing,
  getRFProcessingById,
  getAllRFProcessing,
  getRFProcessingUpdate,
  deleteRFProcessing,
} = require("../controllers/refundProcessingController.js");

const router = express.Router();

router.route("/add").post(isVerifiedUser, addRFProcessing);
router.route("/getById/:id").get(isVerifiedUser, getRFProcessingById);
router.route("/getAllRFProcessing").get(isVerifiedUser, getAllRFProcessing);
router.route("/rfUpdate/:id").put(isVerifiedUser, getRFProcessingUpdate);
router.route("/rfDelete/:id").delete(isVerifiedUser, deleteRFProcessing);

module.exports = router;
