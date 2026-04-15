function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-layout">

        <div className="hero-content">
          <h1>
            Prima le <span className="accent">competenze</span>, poi il profilo.
          </h1>

          <p>
            Una challenge tecnica costruita sulle competenze richieste dal mercato.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">
              Scopri come funziona
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-badge">CHALLENGE TECNICA</span>

            <h3>Screening Developer</h3>

            <div className="hero-tasks">
              <p>✓ Responsive Layout</p>
              <p>✓ Component Logic</p>
              <p>○ API Integration</p>
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