const express = require("express");
const router = express.Router();

const {
  newUser,
  getUser,
  logoutUser,
  getUserDetails,
} = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/user/register").post(newUser);
router.route("/user/login").post(getUser);
router.route("/user/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
module.exports = router;
