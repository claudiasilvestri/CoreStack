import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function DashboardStartup() {
  const { role, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (role !== "startup") {
    return <Navigate to="/dashboard/dev" />;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Startup Dashboard</h1>
    </div>
  );
}

export default DashboardStartup;