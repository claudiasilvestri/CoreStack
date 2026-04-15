import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../lib/supabaseclient";

function DeveloperDirectory() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfiles() {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("is_public", true);

      if (error) {
        console.error("Error loading profiles:", error);
        setLoading(false);
        return;
      }

      setProfiles(data);
      setLoading(false);
    }

    loadProfiles();
  }, []);

  if (loading) {
    return <p>Loading developers...</p>;
  }

  if (!profiles.length) {
    return <p>No public profiles found.</p>;
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "20px" }}>Developer Directory</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            to={`/developers/${profile.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px",
                background: "#fff",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {profile.stack?.join(" • ")}
              </p>

              <p style={{ color: "#6b7280" }}>
                {profile.focus}
              </p>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                {profile.project_type}
              </p>

              <p
                style={{
                  marginTop: "12px",
                  color: "#3b82f6",
                }}
              >
                View profile →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DeveloperDirectory;