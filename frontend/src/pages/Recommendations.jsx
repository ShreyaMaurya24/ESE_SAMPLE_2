import { useState } from "react";

import API from "../services/api";

import RecommendationCard from "../components/RecommendationCard";

function Recommendations() {

  const [employeeData, setEmployeeData] = useState({
    name: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const [recommendation, setRecommendation] =
    useState("");

  // Handle input
  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  // Get AI Recommendation
  const handleAIRecommendation = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const response = await API.post(
        "/ai/recommend",
        {
          ...employeeData,
          skills: employeeData.skills.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRecommendation(
        response.data.recommendation
      );

    } catch (error) {

      console.log(error);

      alert("AI Recommendation Failed");

    }
  };

  return (
    <div>

      <h1>AI Recommendations</h1>

      <form onSubmit={handleAIRecommendation}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Generate AI Recommendation
        </button>

      </form>

      {
        recommendation && (
          <RecommendationCard
            recommendation={recommendation}
          />
        )
      }

    </div>
  );
}

export default Recommendations;