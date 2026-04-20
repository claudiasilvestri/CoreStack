function ProcessSection() {
  return (
    <section className="section">
      <div className="container">

        <div className="content">
          <h2>Come funziona</h2>
        </div>

        <div className="process">

          <div className="process-item">
            <div className="process-number">1</div>
            <div className="process-content">
              <h3>Seleziona un progetto</h3>
              <p>
                Seleziona da GitHub il progetto da includere nel tuo profilo tecnico.
              </p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-number">2</div>
            <div className="process-content">
              <h3>Completa la challenge</h3>
              <p>
                Completa una challenge tecnica pensata per valutare il tuo approccio.
              </p>
            </div>
          </div>

          <div className="process-item">
            <div className="process-number">3</div>
            <div className="process-content">
              <h3>Entra nel matching</h3>
              <p>
                Le aziende vedono risultati e competenze, mentre il profilo resta anonimo fino allo sblocco.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessSection;