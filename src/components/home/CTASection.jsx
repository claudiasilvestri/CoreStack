import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function CTASection() {
  const navigate = useNavigate();
  const { user, role } = useAuth();

  return (
    <section className="section section-alt">
      <div className="container">

        <div className="content cta-box">
          <span className="cta-badge">ACCESSO ALLA PIATTAFORMA</span>

          <div className="section-line"></div>

          <h2>
            Entra nel sistema di <span className="highlight">valutazione</span>.
          </h2>

          <p className="section-sub">
            Richiedi accesso per valutare o essere valutato sulle competenze reali.
          </p>

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
    </section>
  );
}

export default CTASection;