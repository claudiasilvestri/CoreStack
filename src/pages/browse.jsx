import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseclient"
import { Link } from "react-router-dom"

function Browse() {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfiles = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("is_public", true)

      console.log("PROFILES:", data)
      console.log("ERROR:", error)

      if (!error) setProfiles(data)

      setLoading(false)
    }

    loadProfiles()
  }, [])

  if (loading) return <p>loading...</p>
  if (!profiles.length) return <p>nessun profilo trovato</p>

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "20px" }}>browse developers</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {profiles.map((p) => (
          <Link
            key={p.id}
            to={`/profile/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                {p.stack?.join(" • ")}
              </p>

              <p style={{ color: "#6b7280" }}>{p.focus}</p>

              <p style={{ color: "#6b7280", fontSize: "14px" }}>
                {p.project_type}
              </p>

              <p style={{ marginTop: "12px", color: "#3b82f6" }}>
                view profile →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Browse