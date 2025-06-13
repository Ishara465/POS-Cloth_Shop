const express = require("express");
const {
  register,
  login,
  getUserData,
  logout,
} = require("../controllers/userController.js");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);

router.route("/getUserData").get(isVerifiedUser, getUserData);

module.exports = router;
