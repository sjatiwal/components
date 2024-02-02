const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const User = require("../models/userModel");

//Register
exports.newUser = catchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });
    res.status(201).json({ success: true, user });
  } catch (err) {
    return next(err);
  }
});

// Login
exports.getUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (user) {
    const isPasswordMatched = await user.comparePassword(password);
    if (isPasswordMatched) {
      sendToken(user, 200, res);
    } else {
      res.status(401).json({ error: "Email Or Password is wrong" });
    }
  } else {
    res.status(401).json({ error: "Email Or Password is wrong" });
  }
});

// Logout
exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// Reload
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  sendToken(user, 200, res);
});
