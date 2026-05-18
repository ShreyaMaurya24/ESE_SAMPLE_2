import { useState } from "react";
import API from "../services/api";

function EmployeeForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Convert skills string to array
      const employeeData = {
        ...formData,
        skills: formData.skills.split(","),
      };

      // Get JWT token
      const token = localStorage.getItem("token");

      // API request
      const response = await API.post(
        "/employees",
        employeeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      alert("Employee Added Successfully");

      // Clear form
      setFormData({
        name: "",
        email: "",
        department: "",
        skills: "",
        performanceScore: "",
        experience: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to Add Employee"
      );

    }
  };

  return (
    <div>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="skills"
          placeholder="Skills (React,Node.js)"
          value={formData.skills}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          value={formData.performanceScore}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;