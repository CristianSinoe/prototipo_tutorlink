import React from "react";

function TutorProfile() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Perfil del Tutor</h1>
      </div>

      {/* INFO BÁSICA (solo lectura) */}
      <section className="section">
        <h2 className="section-title">Información básica</h2>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="María Pérez"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Correo institucional</label>
            <input
              type="email"
              className="form-input form-readonly"
              value="maria.tutor@example.com"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Programa educativo</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="Ingeniería en Software"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Rol</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="TUTOR"
              readOnly
            />
          </div>
        </div>
        <p className="helper-text">
          * Estos datos son gestionados por el administrador y no pueden
          modificarse desde aquí.
        </p>
      </section>

      {/* Bio y redes */}
      <section className="section">
        <h2 className="section-title">Perfil público</h2>
        <div className="form-grid">
          <div className="form-group form-group-full">
            <label className="form-label">Descripción breve / Bio</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Ejemplo: Tutora de materias del área de programación, disponible para apoyo en proyectos finales."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Enlace a perfil académico</label>
            <input
              className="form-input"
              placeholder="Ejemplo: Google Scholar, ResearchGate"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Enlace a perfil profesional</label>
            <input
              className="form-input"
              placeholder="Ejemplo: LinkedIn"
            />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-primary">Guardar perfil público</button>
        </div>
      </section>

      {/* Preferencias */}
      <section className="section">
        <h2 className="section-title">Preferencias</h2>
        <div className="form-grid form-grid-single-column">
          <label className="checkbox-row">
            <input type="checkbox" />{" "}
            <span>Recibir correo cuando haya nuevas preguntas pendientes</span>
          </label>
          <label className="checkbox-row">
            <input type="checkbox" />{" "}
            <span>Recibir resumen semanal de actividad</span>
          </label>
        </div>
        <div className="form-actions">
          <button className="btn btn-primary">Guardar preferencias</button>
        </div>
      </section>
    </div>
  );
}

export default TutorProfile;
