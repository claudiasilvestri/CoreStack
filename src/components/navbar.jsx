import { supabase } from "../lib/supabaseclient";
import { useNavigate, useLocation, Link } from "react-router-dom";
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
    <nav>
      <div className="container nav-inner">
        <h2 className="nav-logo" onClick={() => navigate("/")}>
          CoreStack
        </h2>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link to="/browse">browse</Link>

          {!hideLogout && user && (
            <button className="btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;