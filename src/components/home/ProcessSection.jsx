function ProcessSection() {
  return (
    <section className="section section-soft">
      <div className="container">

        <div className="content">
          <div className="section-line"></div>

          <h2>
            Come funziona
          </h2>

          <p className="section-sub">
            Un processo strutturato per valutare le competenze prima del profilo.
          </p>
        </div>

        <div className="steps">

          <div className="step">
            <h3>
              <span className="step-number">01 —</span> Accedi alla piattaforma
            </h3>
            <p>
              Accedi alla piattaforma e avvia il processo di valutazione.
            </p>
          </div>

          <div className="step">
            <h3>
              <span className="step-number">02 —</span> Completa la challenge
            </h3>
            <p>
              Affronta una challenge tecnica progettata per testare il tuo approccio e le tue competenze.
            </p>
          </div>

          <div className="step">
            <h3>
              <span className="step-number">03 —</span> Entra nel matching
            </h3>
            <p>
              Le aziende vedono risultati e performance, mentre il profilo resta anonimo fino allo sblocco.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessSection;