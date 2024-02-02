const catchAsyncError = require("../middleware/catchAsyncError");
const Employee = require("../models/employeeModel");
const { Search } = require("../utils/apiFeatures");
exports.newEmployee = catchAsyncError(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    mobileNo,
    gender,
    dob,
    address,
    selectedCountry,
    selectedState,
    skills,
  } = req.body;

  const employee = await Employee.create({
    firstName,
    lastName,
    email,
    mobileNo,
    gender,
    dateOfBirth: dob,
    address,
    country: selectedCountry.name,
    state: selectedState,
    skills,
  });

  res.status(200).json({ success: true, employee });
});

exports.getAllEmployees = catchAsyncError(async (req, res, next) => {
  const firstName = req.query.name;
  const mobileNo = req.query.mobileNo;

  if (firstName || mobileNo) {
    const querystr = { firstName: firstName, mobileNo: mobileNo };
    const employees = await Search(Employee.find(), querystr);

    return res.status(200).json({
      success: true,
      employees: employees,
    });
  }

  const employees = await Employee.find();

  res.status(200).json({
    success: true,
    employees,
  });
});

exports.getEmployeeDetail = catchAsyncError(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);
  res.status(200).json({
    success: true,
    employee,
  });
});

exports.updateEmployee = catchAsyncError(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  const {
    firstName,
    lastName,
    email,
    mobileNo,
    gender,
    dob,
    address,
    country,
    state,
    skills,
  } = req.body;

  employee = await Employee.findByIdAndUpdate(
    req.params.id,
    {
      firstName,
      lastName,
      email,
      mobileNo,
      gender,
      dateOfBirth: dob,
      address,
      country,
      state,
      skills,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({ success: true, employee });
});

exports.deleteEmployee = catchAsyncError(async (req, res, next) => {
  const employee = await Employee.findByIdAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    message: "Employee Data Deleted Successfully",
  });
});
