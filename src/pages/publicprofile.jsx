import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseclient"
import { useParams } from "react-router-dom"

function PublicProfile() {
  const { id } = useParams()

  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", id)
          .maybeSingle()

        setProfile(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (id) loadProfile()
  }, [id])

  if (loading) return <p>loading...</p>
  if (!profile) return <p>profilo non trovato</p>

  return (
    <div>
      <h1>profilo pubblico</h1>

      <p>
        <strong>tecnologie:</strong>{" "}
        {profile.stack?.length ? profile.stack.join(", ") : "—"}
      </p>

      <p>
        <strong>aree:</strong> {profile.focus || "—"}
      </p>

      <p>
        <strong>progetti:</strong> {profile.project_type || "—"}
      </p>
    </div>
  )
}

export default PublicProfile