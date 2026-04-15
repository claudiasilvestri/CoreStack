import { useState } from "react";
import { supabase } from "../lib/supabaseclient";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("developer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      const userId = data?.user?.id;

      if (!userId) throw new Error("User not created");

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: userId,
          role,
        });

      if (profileError) throw profileError;

      if (role === "developer") {
        navigate("/dashboard/dev", { replace: true });
      }

      if (role === "startup") {
        navigate("/dashboard/startup", { replace: true });
      }

    } catch (err) {
      console.error(err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Signup</h1>

        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="role-select">
            <label>
              <input
                type="radio"
                value="developer"
                checked={role === "developer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Developer
            </label>

            <label>
              <input
                type="radio"
                value="startup"
                checked={role === "startup"}
                onChange={(e) => setRole(e.target.value)}
              />
              Startup
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        <div className="auth-link">
          Already registered?{" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;