import { supabase } from "../lib/supabaseclient"

export const getProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  if (error) {
    console.error(error)
    return null
  }

  return data
}

export const updateProfile = async (updates) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id)

  if (error) {
    console.error("Errore update:", error)
    return null
  }

  return data
}