import { useState } from "react";
import { supabase } from "../lib/supabaseclient";
import { useNavigate } from "react-router-dom";

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

      if (!userId) {
        throw new Error("User not created");
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: userId,
          role: role,
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
    <div style={{ padding: "40px" }}>
      <h1>Signup</h1>

      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "300px",
        }}
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div>
          <label>
            <input
              type="radio"
              value="developer"
              checked={role === "developer"}
              onChange={(e) => setRole(e.target.value)}
            />
            Developer
          </label>

          <label style={{ marginLeft: "16px" }}>
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
    </div>
  );
}

export default Signup;