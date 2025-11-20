import React from "react";

function TutorDashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Dashboard del Tutor</h1>

      {/* Resumen rápido */}
      <section className="section">
        <h2 className="section-title">Resumen rápido</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Preguntas pendientes</div>
            <div className="card-value">[ 5 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Preguntas respondidas (hoy)</div>
            <div className="card-value">[ 3 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Total respuestas</div>
            <div className="card-value">[ 124 ]</div>
          </div>
        </div>
      </section>

      {/* Atajos */}
      <section className="section">
        <h2 className="section-title">Atajos</h2>
        <div className="shortcut-buttons">
          <button className="shortcut-button">Ver preguntas pendientes</button>
          <button className="shortcut-button">Ver preguntas por alcance</button>
          <button className="shortcut-button">Ver historial de respuestas</button>
        </div>
      </section>

      {/* Preguntas recientes asignadas */}
      <section className="section">
        <h2 className="section-title">Preguntas recientes asignadas</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Estudiante</th>
                <th>Alcance</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Cómo agendo una tutoría para matemáticas?</td>
                <td>Carlos López</td>
                <td>
                  <span className="tag">Semestre</span>
                </td>
                <td>16/11 09:30</td>
                <td>
                  <span className="status-pill status-pendiente">
                    Pendiente
                  </span>
                </td>
              </tr>
              <tr>
                <td>¿Cuántas sesiones puedo pedir por materia?</td>
                <td>María Pérez</td>
                <td>
                  <span className="tag">Programa</span>
                </td>
                <td>15/11 18:10</td>
                <td>
                  <span className="status-pill status-publicada">
                    Respondida
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  ¿Qué pasa si ya no puedo asistir a una tutoría agendada?
                </td>
                <td>Ana Torres</td>
                <td>
                  <span className="tag">General</span>
                </td>
                <td>15/11 17:45</td>
                <td>
                  <span className="status-pill status-publicada">
                    Respondida
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default TutorDashboard;
