import { useEffect, useState } from "react";
import API from "../services/api";
import SearchFilter from "./SearchFilter";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const [editScore, setEditScore] = useState({});

  // Fetch employees
  const fetchEmployees = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await API.get(
        "/employees",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete Employee
  const deleteEmployee = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await API.delete(
        `/employees/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Employee Deleted");

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }
  };

  // Update Performance Score
  const updateEmployee = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await API.put(
        `/employees/${id}`,
        {
          performanceScore: editScore[id],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Employee Updated");

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <h2>Employee List</h2>

      <SearchFilter setEmployees={setEmployees} />

      {
        employees.length === 0 ? (
          <p>No Employees Found</p>
        ) : (
          employees.map((employee) => (
            <div
              key={employee._id}
              className="employee-card"
            >

              <h3>{employee.name}</h3>

              <p>Email: {employee.email}</p>

              <p>
                Department:
                {" "}
                {employee.department}
              </p>

              <p>
                Skills:
                {" "}
                {employee.skills.join(", ")}
              </p>

              <p>
                Performance Score:
                {" "}
                {employee.performanceScore}
              </p>

              <p>
                Experience:
                {" "}
                {employee.experience} years
              </p>

              {/* Update Score */}

              <input
                type="number"
                placeholder="New Score"
                onChange={(e) =>
                  setEditScore({
                    ...editScore,
                    [employee._id]: e.target.value,
                  })
                }
              />

              <button
                onClick={() =>
                  updateEmployee(employee._id)
                }
              >
                Update
              </button>

              {" "}

              {/* Delete Employee */}

              <button
                onClick={() =>
                  deleteEmployee(employee._id)
                }
              >
                Delete
              </button>

            </div>
          ))
        )
      }

    </div>
  );
}

export default EmployeeList;