import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseclient";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, role } = useAuth();

  const handleLogout = async () => {
    console.log("🚪 LOGOUT CLICK");

    await supabase.auth.signOut();

    console.log("✅ LOGGED OUT");

    navigate("/login");
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-inner">

          {/* LOGO */}
          <h2
            className="nav-logo"
            onClick={() => {
              console.log("🏠 GO HOME");
              navigate("/");
            }}
          >
            CoreStack
          </h2>

          <div className="nav-actions">

            {!user && (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
              </>
            )}

            {user && role === "startup" && (
              <Link to="/developers" className="nav-link">
                Developers
              </Link>
            )}

            {user && (
              <button className="nav-cta" onClick={handleLogout}>
                Logout
              </button>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;