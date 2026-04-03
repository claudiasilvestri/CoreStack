import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function CTASection() {
  const navigate = useNavigate();
  const { user, role } = useAuth();

  return (
    <section className="section">
      <div className="container">
        <div className="card section-content section-center cta-box">
          <h2>Inizia da qui.</h2>

          <p className="section-sub">
            Uno step tecnico iniziale, condiviso tra frontend developer e aziende.
          </p>

          <div className="cta-buttons">
            {!user ? (
              <>
                <button
                  className="btn-primary"
                  onClick={() => navigate("/signup")}
                >
                  Crea il tuo profilo
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => navigate("/login")}
                >
                  Richiedi accesso
                </button>
              </>
            ) : (
              <button
                className="btn-primary"
                onClick={() =>
                  navigate(
                    role === "startup"
                      ? "/dashboard/startup"
                      : "/dashboard/dev"
                  )
                }
              >
                Vai alla dashboard
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;