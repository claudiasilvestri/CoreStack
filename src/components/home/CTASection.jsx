import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

function CTASection() {
  const navigate = useNavigate();
  const { user, role } = useAuth();

  return (
    <section className="section">
      <div className="container">
        <div className="card section-content section-center cta-box">
          <h2>Entra nel sistema di valutazione.</h2>

          <p className="section-sub">
            Richiedi accesso per valutare o essere valutato sulle competenze reali.
          </p>

          <div className="cta-buttons">
            {!user ? (
              <button
                className="btn-primary"
                onClick={() => navigate("/signup")}
              >
                Richiedi accesso
              </button>
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
                Accedi al tuo spazio
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;