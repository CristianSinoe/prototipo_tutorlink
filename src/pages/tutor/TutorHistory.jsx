import React from "react";

function TutorHistory() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Historial de respuestas</h1>
      </div>

      {/* Filtros */}
      <section className="section">
        <h2 className="section-title">Filtros</h2>
        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">Buscar por pregunta</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Texto de la pregunta"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Alcance</label>
            <select className="filter-input">
              <option>Todos</option>
              <option>General</option>
              <option>Programa educativo</option>
              <option>Plan</option>
              <option>Semestre</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Estado</label>
            <select className="filter-input">
              <option>Publicadas</option>
              <option>Corregidas</option>
              <option>Rechazadas</option>
            </select>
          </div>
        </div>
      </section>

      {/* Tabla del historial */}
      <section className="section">
        <h2 className="section-title">Listado</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Estado</th>
                <th>Fecha respuesta</th>
                <th>Alcance</th>
                <th>Estudiante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Cómo agendo una tutoría?</td>
                <td>
                  <span className="status-pill status-publicada">
                    Publicada
                  </span>
                </td>
                <td>15/11 18:10</td>
                <td>
                  <span className="tag">General</span>
                </td>
                <td>Carlos López</td>
              </tr>
              <tr>
                <td>¿Cuántas tutorías puedo pedir por materia?</td>
                <td>
                  <span className="status-pill status-corregida">
                    Corregida
                  </span>
                </td>
                <td>14/11 17:00</td>
                <td>
                  <span className="tag">Plan</span>
                </td>
                <td>María Pérez</td>
              </tr>
              <tr>
                <td>Pregunta fuera del alcance del sistema</td>
                <td>
                  <span className="status-pill status-rechazada">
                    Rechazada
                  </span>
                </td>
                <td>13/11 16:20</td>
                <td>
                  <span className="tag">Programa</span>
                </td>
                <td>Ana Torres</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="helper-text">
          * Esta vista sirve para que el tutor revise lo que ha respondido y
          cómo han sido clasificadas sus respuestas.
        </p>
      </section>
    </div>
  );
}

export default TutorHistory;
