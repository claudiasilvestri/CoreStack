function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <h2>Come funziona</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Seleziona un progetto</h3>
            <p>
              Seleziona da GitHub il progetto da includere nel tuo profilo tecnico.
            </p>
          </div>

          <div className="step">
            <h3>2. Completa la challenge</h3>
            <p>
              Completa una challenge tecnica pensata per valutare il tuo approccio.
            </p>
          </div>

          <div className="step">
            <h3>3. Entra nel matching</h3>
            <p>
              Le aziende vedono risultati e competenze, mentre il profilo resta anonimo fino allo sblocco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;