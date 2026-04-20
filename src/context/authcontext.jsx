import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseclient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH ROLE
  const fetchRole = async (user) => {
    if (!user) return;

    console.log("👤 FETCH ROLE FOR:", user.id);

    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id);

    console.log("📦 RAW DATA:", data);
    console.log("❌ ERROR:", error);

    if (data && data.length > 0) {
      setRole(data[0].role);
      console.log("✅ ROLE SET:", data[0].role);
    } else {
      console.log("🚨 NO ROLE FOUND");
      setRole(null);
    }
  };

  useEffect(() => {
    console.log("🚀 INIT AUTH");

    // GET SESSION
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("📦 SESSION:", session);

      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        fetchRole(currentUser);
      }

      setLoading(false);
    });

    // LISTENER
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("🔄 AUTH STATE CHANGE", session);

        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          fetchRole(currentUser);
        } else {
          setRole(null);
        }

        setLoading(false);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);