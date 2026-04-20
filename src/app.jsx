import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import DashboardDev from "./pages/DashboardDev";
import DashboardStartup from "./pages/DashboardStartup";
import DeveloperDirectory from "./pages/DeveloperDirectory";
import PublicProfile from "./pages/PublicProfile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

<Route path="/dashboard/dev" element={<DashboardDev />} />

        <Route
          path="/dashboard/startup"
          element={
            <ProtectedRoute allowedRole="startup">
              <DashboardStartup />
            </ProtectedRoute>
          }
        />

        <Route
          path="/developers"
          element={
            <ProtectedRoute allowedRole="startup">
              <DeveloperDirectory />
            </ProtectedRoute>
          }
        />

        <Route path="/developers/:id" element={<PublicProfile />} />
      </Routes>
    </>
  );
}

export default App;