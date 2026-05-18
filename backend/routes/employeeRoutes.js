const express = require("express");

const router = express.Router();

const {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const { protect } = require("../middleware/authMiddleware");

// Add Employee
router.post("/", protect, addEmployee);


// Get All Employees
router.get("/", protect, getEmployees);


// Search Employee
router.get("/search", protect, searchEmployee);


// Update Employee
router.put("/:id", protect, updateEmployee);


// Delete Employee
router.delete("/:id", protect, deleteEmployee);


module.exports = router;