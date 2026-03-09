import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import DashboardDev from "./pages/dashboard-dev";
import DashboardStartup from "./pages/dashboard-startup";
import ProtectedRoute from "./components/protectedroute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard/dev"
          element={
            <ProtectedRoute allowedRole="developer">
              <DashboardDev />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/startup"
          element={
            <ProtectedRoute allowedRole="startup">
              <DashboardStartup />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;