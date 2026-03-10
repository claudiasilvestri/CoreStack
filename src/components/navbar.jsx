import { supabase } from "../lib/supabaseclient";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const hideLogout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        CoreStack
      </h2>

      {!hideLogout && user && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;