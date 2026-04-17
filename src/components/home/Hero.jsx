function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-layout">

        <div className="hero-content">
          <h1>
            Prima le <span className="accent">competenze</span>, poi il profilo.
          </h1>

          <p>
            Un sistema di valutazione tecnica che permette di confrontare i developer su basi reali, prima del CV.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">
              Richiedi accesso
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-badge">VALUTAZIONE TECNICA</span>

            <h3>Profilo anonimo</h3>

            <div className="hero-tasks">
              <p>✓ Codice</p>
              <p>✓ UX</p>
              <p>✓ Decision making</p>
            </div>

            <div className="hero-progress">
              <div className="hero-progress-fill"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;