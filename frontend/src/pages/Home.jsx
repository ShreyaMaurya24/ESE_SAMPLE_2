import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Home() {
  return (
    <div className="container">

      <h1>AI Employee Management System</h1>

      <EmployeeForm />

      <EmployeeList />

    </div>
  );
}

export default Home;