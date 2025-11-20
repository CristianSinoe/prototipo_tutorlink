import React from "react";
import { Link } from "react-router-dom";

function StudentMyQuestions() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Mis preguntas</h1>
      </div>

      {/* Filtros */}
      <section className="section">
        <h2 className="section-title">Filtros</h2>
        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">Buscar</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Texto de la pregunta"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Estado</label>
            <select className="filter-input">
              <option>Todos</option>
              <option>Pendiente</option>
              <option>Respondida</option>
              <option>Rechazada</option>
            </select>
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
        </div>
      </section>

      {/* Tabla de preguntas del estudiante */}
      <section className="section">
        <h2 className="section-title">Listado</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Alcance</th>
                <th style={{ width: "140px" }}>Acciones</th>
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
                <td>15/11 17:50</td>
                <td>
                  <span className="tag">General</span>
                </td>
                <td>
                  <div className="table-actions">
                    <Link
                      to="/estudiante/mis-preguntas/detalle"
                      className="btn btn-ghost"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>¿Cuántas tutorías puedo pedir por materia?</td>
                <td>
                  <span className="status-pill status-publicada">
                    Respondida
                  </span>
                </td>
                <td>14/11 17:00</td>
                <td>
                  <span className="tag">Plan</span>
                </td>
                <td>
                  <div className="table-actions">
                    <Link
                      to="/estudiante/mis-preguntas/detalle"
                      className="btn btn-ghost"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>¿Qué pasa si ya no puedo asistir?</td>
                <td>
                  <span className="status-pill status-pendiente">
                    Pendiente
                  </span>
                </td>
                <td>16/11 09:30</td>
                <td>
                  <span className="tag">Semestre</span>
                </td>
                <td>
                  <div className="table-actions">
                    <Link
                      to="/estudiante/mis-preguntas/detalle"
                      className="btn btn-ghost"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="helper-text">
          * Aquí el estudiante puede revisar todas sus preguntas y acceder al
          detalle y respuesta completa.
        </p>
      </section>
    </div>
  );
}

export default StudentMyQuestions;
