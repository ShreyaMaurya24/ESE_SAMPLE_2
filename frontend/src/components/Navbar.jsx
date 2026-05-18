import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logoutHandler = () => {

    localStorage.removeItem("token");

    alert("Logged Out");

    navigate("/login");
  };

  return (
    <div
      style={{
        background: "#007bff",
        padding: "15px",
        marginBottom: "20px",
      }}
    >

      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "15px",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <Link
        to="/login"
        style={{
          color: "white",
          marginRight: "15px",
          textDecoration: "none",
        }}
      >
        Login
      </Link>

      <Link
        to="/register"
        style={{
          color: "white",
          marginRight: "15px",
          textDecoration: "none",
        }}
      >
        Register
      </Link>

      <Link
        to="/recommendations"
        style={{
          color: "white",
          marginRight: "15px",
          textDecoration: "none",
        }}
      >
        AI Recommendations
      </Link>

      <button
        onClick={logoutHandler}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;