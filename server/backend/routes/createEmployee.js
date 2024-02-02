const express = require("express");
const router = express.Router();

const {
  newEmployee,
  getAllEmployees,
  getEmployeeDetail,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");

router.route("/employee/new").post(newEmployee);
router.route("/employee/all").get(getAllEmployees);
router.route("/employee/:id").get(getEmployeeDetail);
router.route("/employee/update/:id").put(updateEmployee);
router.route("/employee/delete/:id").delete(deleteEmployee);

module.exports = router;
