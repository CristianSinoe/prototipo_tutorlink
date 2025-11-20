import React from "react";

function StudentDashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Dashboard del Estudiante</h1>

      {/* Resumen rápido */}
      <section className="section">
        <h2 className="section-title">Resumen rápido</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Preguntas enviadas</div>
            <div className="card-value">[ 12 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Preguntas respondidas</div>
            <div className="card-value">[ 9 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Preguntas pendientes</div>
            <div className="card-value">[ 3 ]</div>
          </div>
        </div>
      </section>

      {/* Atajos */}
      <section className="section">
        <h2 className="section-title">Atajos</h2>
        <div className="shortcut-buttons">
          <button className="shortcut-button">Hacer nueva pregunta</button>
          <button className="shortcut-button">Ver mis preguntas</button>
        </div>
      </section>

      {/* Últimas respuestas */}
      <section className="section">
        <h2 className="section-title">Últimas respuestas</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Estado</th>
                <th>Fecha respuesta</th>
                <th>Tutor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Cómo agendo una tutoría?</td>
                <td>
                  <span className="status-pill status-publicada">
                    Respondida
                  </span>
                </td>
                <td>15/11 18:10</td>
                <td>Tutor 1</td>
              </tr>
              <tr>
                <td>¿Cuántas tutorías puedo pedir por materia?</td>
                <td>
                  <span className="status-pill status-publicada">
                    Respondida
                  </span>
                </td>
                <td>14/11 17:00</td>
                <td>Tutor 2</td>
              </tr>
              <tr>
                <td>¿Qué pasa si ya no puedo asistir?</td>
                <td>
                  <span className="status-pill status-pendiente">
                    Pendiente
                  </span>
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
