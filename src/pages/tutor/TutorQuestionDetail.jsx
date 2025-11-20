import React from "react";

function TutorQuestionDetail() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Detalle de pregunta</h1>
      </div>

      {/* METADATOS DE LA PREGUNTA */}
      <section className="section">
        <h2 className="section-title">Información de la pregunta</h2>
        <div className="question-meta-grid">
          <div className="question-meta-item">
            <div className="question-meta-label">ID de la pregunta</div>
            <div className="question-meta-value">#102</div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Estudiante</div>
            <div className="question-meta-value">Carlos López</div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Programa</div>
            <div className="question-meta-value">
              Ingeniería en Software
            </div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Semestre</div>
            <div className="question-meta-value">5</div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Fecha de creación</div>
            <div className="question-meta-value">16/11 09:30</div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Estado actual</div>
            <div className="question-meta-value">
              <span className="status-pill status-pendiente">
                Pendiente
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TEXTO DE LA PREGUNTA */}
      <section className="section">
        <h2 className="section-title">Pregunta</h2>
        <div className="question-box">
          ¿Cómo agendo una tutoría para regularizarme en la materia de
          programación avanzada y cuántas sesiones puedo solicitar por
          semestre?
        </div>
      </section>

      {/* ALCANCE Y RECLASIFICACIÓN */}
      <section className="section">
        <h2 className="section-title">Alcance</h2>
        <div className="form-grid form-grid-single-column">
          <div className="form-group">
            <label className="form-label">Alcance actual</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="Programa educativo"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Reclasificar alcance (opcional)
            </label>
            <select className="form-input">
              <option>Mantener como Programa educativo</option>
              <option>General</option>
              <option>Plan</option>
              <option>Semestre</option>
            </select>
          </div>
        </div>
      </section>

      {/* RESPUESTA DEL TUTOR */}
      <section className="section">
        <h2 className="section-title">Respuesta del tutor</h2>
        <textarea
          className="form-input"
          rows={6}
          placeholder="Escribe aquí tu respuesta para el estudiante. Recuerda ser claro, breve y específico."
        />
      </section>

      {/* ACCIONES SOBRE LA PREGUNTA */}
      <section className="section">
        <h2 className="section-title">Acciones</h2>
        <div className="answer-actions">
          <div className="answer-options">
            <label className="radio-row">
              <input type="radio" name="accion" defaultChecked />{" "}
              <span>Publicar respuesta (aprobar)</span>
            </label>
            <label className="radio-row">
              <input type="radio" name="accion" />{" "}
              <span>
                Publicar como corregida (ajustar redacción de la pregunta)
              </span>
            </label>
            <label className="radio-row">
              <input type="radio" name="accion" />{" "}
              <span>Rechazar pregunta (fuera de alcance)</span>
            </label>
          </div>

          <div className="form-group">
            <label className="form-label">
              Motivo (en caso de rechazo o corrección)
            </label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Describe brevemente el motivo si decides rechazar o corregir la pregunta."
            />
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">Guardar y aplicar acción</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
      </section>

      {/* HISTORIAL DE LA PREGUNTA */}
      <section className="section">
        <h2 className="section-title">Historial de la pregunta</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Fecha y hora</th>
                <th>Acción</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16/11 09:30</td>
                <td>Pregunta creada por el estudiante</td>
                <td>Carlos López</td>
              </tr>
              <tr>
                <td>16/11 09:35</td>
                <td>Pregunta asignada al tutor actual</td>
                <td>admin01</td>
              </tr>
              {/* En una versión real se verían aquí futuras acciones */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default TutorQuestionDetail;
