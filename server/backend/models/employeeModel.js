const mongoose = require("mongoose");

const employeeSchemma = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please Enter Last Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
  },
  mobileNo: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  skills: {
    type: [String],
    default: [],
  },
  creatdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Employee", employeeSchemma);
