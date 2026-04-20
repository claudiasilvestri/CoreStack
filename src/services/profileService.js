import { supabase } from "../lib/supabaseclient"

export const getProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("AUTH USER:", user)
  console.log("AUTH USER ID:", user?.id)

  if (!user) return null

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  console.log("PROFILE DATA:", data)
  console.log("PROFILE ERROR:", error)

  if (error) {
    console.error("GET PROFILE ERROR:", error)
    return null
  }

  return data
}

export const updateProfile = async (updates) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("UPDATE USER ID:", user?.id)
  console.log("UPDATES:", updates)

  if (!user) return

  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id)

  console.log("UPDATE RESULT:", data)
  console.log("UPDATE ERROR:", error)

  if (error) {
    console.error("Errore update:", error)
    return null
  }

  return data
}