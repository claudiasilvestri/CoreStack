function AudienceSection() {
  return (
    <section className="section">
      <div className="container section-center">

        <div className="section-content">
          <h2>Una valutazione più chiara per tutti.</h2>

          <p className="section-sub">
            Tutti partono dallo stesso punto, con un criterio comune di valutazione.
          </p>
        </div>

        <div className="audience-grid">

          <div className="audience-column">
            <h3>Per le aziende</h3>

            <ul>
              <li>Competenze visibili fin da subito</li>
              <li>Confronto più chiaro</li>
              <li>Tempi di selezione ridotti</li>
            </ul>
          </div>

          <div className="audience-column">
            <h3>Per i developer</h3>

            <ul>
              <li>Competenze al centro della valutazione</li>
              <li>Minor peso del CV iniziale</li>
              <li>Stesso punto di partenza</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AudienceSection;