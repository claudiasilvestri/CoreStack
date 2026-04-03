import { useEffect, useState } from "react"
import { getProfile, updateProfile } from "../services/profiles"
import StackSelector from "../components/StackSelector"
import "../layout/dashboard-dev.css"

const FOCUS_OPTIONS = [
  "UI / Frontend",
  "Integrazione API",
  "Logica applicativa",
  "Ottimizzazione performance",
  "Risoluzione bug"
]

const PROJECT_OPTIONS = [
  "Web App",
  "Dashboard",
  "Landing Page",
  "Sito vetrina"
]

function DashboardDev() {
  const [profile, setProfile] = useState(null)
  const [stack, setStack] = useState([])
  const [isEditing, setIsEditing] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      const data = await getProfile()
      setProfile(data)

      if (data?.stack) {
        setStack(data.stack)
      }
    }

    loadProfile()
  }, [])

  const handleSaveStack = async (newStack) => {
    setStack(newStack)

    await updateProfile({
      stack: newStack
    })
  }

  const handleUpdate = async (field, value) => {
    setProfile({ ...profile, [field]: value })

    await updateProfile({
      [field]: value
    })
  }

  const isProfileComplete =
    stack.length > 0 &&
    profile?.focus &&
    profile?.project_type

  return (
    <div className="dashboard-dev">
      <div className="dashboard-container">
        <h1>Dashboard Developer</h1>

        <div className="dashboard-card">
          <h2>Profilo</h2>

          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Salva" : "Modifica"}
          </button>

          {!profile ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="profile-section">
                <p><strong>Tecnologie</strong></p>

                {isEditing ? (
                  <StackSelector
                    selected={stack}
                    setSelected={handleSaveStack}
                  />
                ) : (
                  <p className="placeholder">
                    {stack.join(", ") || "—"}
                  </p>
                )}
              </div>

              <div className="profile-section">
                <p><strong>Aree</strong></p>

                {isEditing ? (
                  <select
                    value={profile.focus || ""}
                    onChange={(e) =>
                      handleUpdate("focus", e.target.value)
                    }
                  >
                    <option value="">Seleziona</option>
                    {FOCUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="placeholder">
                    {profile.focus || "—"}
                  </p>
                )}
              </div>

              <div className="profile-section">
                <p><strong>Tipologia progetti</strong></p>

                {isEditing ? (
                  <select
                    value={profile.project_type || ""}
                    onChange={(e) =>
                      handleUpdate("project_type", e.target.value)
                    }
                  >
                    <option value="">Seleziona</option>
                    {PROJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="placeholder">
                    {profile.project_type || "—"}
                  </p>
                )}
              </div>

              <div className="profile-section">
                <p><strong>Repository selezionata</strong></p>
                <p className="placeholder">—</p>
              </div>

              <span className="profile-status">
                {isProfileComplete
                  ? "Profilo visibile"
                  : "Profilo incompleto"}
              </span>
            </>
          )}
        </div>

        <div className="dashboard-card">
          <h2>Challenge</h2>

          <p>
            Completa la challenge per rendere il tuo profilo visibile alle startup.
          </p>

          <div className="challenge-row">
            <span className="challenge-status">Non iniziata</span>
            <button className="btn-primary">Inizia challenge</button>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Valutazione</h2>

          <p className="score">Punteggio: --</p>
          <p>Completa la challenge per ricevere la valutazione.</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardDev