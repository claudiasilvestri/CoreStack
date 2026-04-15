import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import DashboardDev from "./pages/DashboardDev";
import DashboardStartup from "./pages/DashboardStartup";
import PublicProfile from "./pages/PublicProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Browse from "./pages/Browse"

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
            <ProtectedRoute>
              <DashboardDev />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/startup"
          element={
            <ProtectedRoute>
              <DashboardStartup />
            </ProtectedRoute>
          }
        />

        <Route path="/profile/:id" element={<PublicProfile />} />

       <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
}

export default App;