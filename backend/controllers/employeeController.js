const Employee = require("../models/Employee");


// Add Employee
const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      department,
      skills,
      performanceScore,
      experience,
    } = req.body;

    // Check duplicate email
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({
        message: "Employee already exists",
      });
    }

    // Create employee
    const employee = await Employee.create({
      name,
      email,
      department,
      skills,
      performanceScore,
      experience,
    });

    res.status(201).json(employee);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Get All Employees
const getEmployees = async (req, res) => {
  try {

    const employees = await Employee.find();

    res.status(200).json(employees);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Search Employee by Department
const searchEmployee = async (req, res) => {
  try {

    const department = req.query.department;

    const employees = await Employee.find({
      department: department,
    });

    res.status(200).json(employees);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



const updateEmployee = async (req, res) => {
  try {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedEmployee);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Employee deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
};