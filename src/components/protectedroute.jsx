import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  console.log("PROTECTED ROUTE → user:", user);
  console.log("PROTECTED ROUTE → loading:", loading);

  if (loading) {
    return <p>Loading auth...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;