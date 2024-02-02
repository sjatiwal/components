const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  creatdAt: { type: Date, default: Date.now },
});

// Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = crypto
    .createHash("sha256")
    .update(this.password)
    .digest("hex");
});

// JWT token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  enteredPassword = crypto
    .createHash("sha256")
    .update(enteredPassword)
    .digest("hex");
  return enteredPassword === this.password;
};

module.exports = mongoose.model("User", userSchema);
