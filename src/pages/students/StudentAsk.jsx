import React from "react";

function StudentAsk() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Hacer una pregunta</h1>
      </div>

      {/* INFO DE CONTEXTO */}
      <section className="section">
        <p className="helper-text">
          Usa este formulario para enviar una duda al sistema de tutorías.
          Recuerda ser claro y respetuoso. El alcance ayudará a dirigir mejor tu
          pregunta.
        </p>
      </section>

      {/* FORMULARIO */}
      <section className="section">
        <h2 className="section-title">Formulario de pregunta</h2>
        <form
          className="form-grid"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group form-group-full">
            <label className="form-label">Título o asunto de la pregunta</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ejemplo: ¿Cómo agendo una tutoría?"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Alcance</label>
            <select className="form-input">
              <option>Selecciona una opción</option>
              <option>General</option>
              <option>Programa educativo</option>
              <option>Plan</option>
              <option>Semestre</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Semestre (opcional)</label>
            <input
              type="number"
              className="form-input"
              placeholder="Ejemplo: 5"
            />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">
              Describe tu pregunta con más detalle
            </label>
            <textarea
              className="form-input"
              rows={6}
              placeholder="Explica tu situación o duda. Ejemplo: Quiero saber cómo agendar una tutoría para la materia de programación avanzada..."
            />
          </div>
        </form>

        <div className="form-actions">
          <button className="btn btn-primary">Enviar pregunta</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
      </section>
    </div>
  );
}

export default StudentAsk;
