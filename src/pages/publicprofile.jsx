import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseclient"

function publicprofile() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const load = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) return

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      setProfile(data)
    }

    load()
  }, [])

  if (!profile) return <p>loading...</p>

  return (
    <div>
      <h1>profilo pubblico</h1>

      <p><strong>tecnologie:</strong> {profile.stack?.join(", ")}</p>
      <p><strong>aree:</strong> {profile.focus}</p>
      <p><strong>progetti:</strong> {profile.project_type}</p>
    </div>
  )
}

export default publicprofile