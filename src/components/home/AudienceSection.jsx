function AudienceSection() {
  return (
    <section className="section section-alt">
      <div className="container">

        <div className="content">
          <div className="section-line"></div>

          <h2>
            Stesso punto di partenza, <span className="highlight">per tutti</span>.
          </h2>

          <p className="section-sub">
            Ogni candidato viene valutato sul lavoro reale, prima che il profilo entri in gioco.
          </p>
        </div>

        <div className="audience-grid">

          <div className="audience-column">
          
            <h3>Per le aziende</h3>

            <ul>
              <li>Vedono le competenze fin dall’inizio</li>
              <li>Confrontano candidati sullo stesso criterio</li>
              <li>Riduzione del tempo di selezione</li>
            </ul>
          </div>

          <div className="audience-column">
          
            <h3>Per i developer</h3>

            <ul>
              <li>Vengono valutati sul lavoro reale</li>
              <li>Il CV non è il primo filtro</li>
              <li>Stesso punto di partenza per tutti</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AudienceSection;