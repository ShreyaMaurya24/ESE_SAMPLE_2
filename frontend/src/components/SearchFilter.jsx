import { useState } from "react";
import API from "../services/api";

function SearchFilter({ setEmployees }) {

  const [department, setDepartment] = useState("");

  const handleSearch = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await API.get(
        `/employees/search?department=${department}`,
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

  return (
    <div>

      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchFilter;