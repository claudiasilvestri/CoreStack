import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function FinalCTA() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <section className="section cta-section">
      <div className="container cta-container">
        <h2>Inizia da qui.</h2>

        <p className="section-sub">
          Un primo step tecnico condiviso tra frontend junior e chi sta assumendo.
        </p>

        <div className="cta-buttons">

          {!user && (
            <button
              className="btn-primary"
              onClick={() => navigate("/signup")}
            >
              Crea il tuo profilo
            </button>
          )}

          <button
            className="btn-secondary"
            onClick={() => navigate("/login")}
          >
            Richiedi accesso
          </button>

        </div>
      </div>
    </section>
  );
}

export default FinalCTA;