function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <h2>Come funziona</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Creazione profilo</h3>
            <p>Il developer accede con GitHub.</p>
            <p>Seleziona un progetto rappresentativo.</p>
            <p>Il profilo è costruito sulle competenze tecniche.</p>
          </div>

          <div className="step">
            <h3>2. Step tecnico</h3>
            <p>Completa una challenge standardizzata.</p>
            <p>Il risultato è visibile alle aziende.</p>
          </div>

          <div className="step">
            <h3>3. Match</h3>
            <p>Dopo lo step tecnico, l’azienda sblocca il profilo.</p>
            <p>Il contatto avviene solo dopo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;