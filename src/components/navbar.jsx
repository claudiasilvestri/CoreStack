import { supabase } from "../lib/supabaseclient";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    console.log("LOGOUT CLICK");

    supabase.auth.signOut({ scope: "local" });

    console.log("SIGNED OUT");

    window.location.href = "/login";
  };

  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <h2>CoreStack</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;