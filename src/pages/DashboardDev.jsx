import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getProfile, updateProfile } from "../services/profileService";
import StackSelector from "../components/StackSelector";
import "../styles/dashboard-dev.css";

const FOCUS_OPTIONS = [
  "UI / Frontend",
  "Integrazione API",
  "Logica applicativa",
  "Ottimizzazione performance",
  "Risoluzione bug"
];

const PROJECT_OPTIONS = [
  "Web App",
  "Dashboard",
  "Landing Page",
  "Sito vetrina"
];

function DashboardDev() {
  const { role, loading: authLoading } = useAuth();

  const [profile, setProfile] = useState(null);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("ROLE:", role);
  console.log("AUTH LOADING:", authLoading);

  useEffect(() => {
    if (!role) return;

    const loadProfile = async () => {
      console.log("🚀 LOADING PROFILE");

      const data = await getProfile();

      console.log("📦 PROFILE:", data);

      setProfile(data);

      if (data?.stack) {
        setStack(data.stack);
      }

      setLoading(false);
    };

    loadProfile();
  }, [role]);

  if (authLoading) return <p>Loading auth...</p>;

  if (!role) return <p>Loading role...</p>;

  if (role !== "developer") {
    return <Navigate to="/dashboard/startup" />;
  }

  if (loading) return <p>Loading profile...</p>;

  const handleSaveStack = async (newStack) => {
    setStack(newStack);
    await updateProfile({ stack: newStack });
  };

  const handleUpdate = async (field, value) => {
    setProfile({ ...profile, [field]: value });
    await updateProfile({ [field]: value });
  };

  return (
    <div className="dashboard-dev">
      <div className="dashboard-container">
        <h1>Dashboard Developer</h1>

        <div className="dashboard-card">
          <h2>Profilo</h2>

          <div className="profile-section">
            <p><strong>Tecnologie</strong></p>
            <StackSelector selected={stack} setSelected={handleSaveStack} />
          </div>

          <div className="profile-section">
            <p><strong>Aree</strong></p>
            <select
              value={profile.focus || ""}
              onChange={(e) =>
                handleUpdate("focus", e.target.value)
              }
            >
              <option value="">Seleziona</option>
              {FOCUS_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="profile-section">
            <p><strong>Tipologia progetti</strong></p>
            <select
              value={profile.project_type || ""}
              onChange={(e) =>
                handleUpdate("project_type", e.target.value)
              }
            >
              <option value="">Seleziona</option>
              {PROJECT_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDev;