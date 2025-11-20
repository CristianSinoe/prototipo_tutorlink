import React from "react";
import { Link } from "react-router-dom";

function TutorQuestions() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Preguntas pendientes</h1>
      </div>

      {/* Filtros básicos */}
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
              <option>Solo pendientes</option>
              <option>Con respuesta</option>
              <option>Rechazadas</option>
            </select>
          </div>
        </div>
      </section>

      {/* Tabla de preguntas pendientes */}
      <section className="section">
        <h2 className="section-title">Listado</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Estudiante</th>
                <th>Alcance</th>
                <th>Fecha</th>
                <th style={{ width: "200px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Cómo me inscribo a una tutoría?</td>
                <td>Sinoe Hernández</td>
                <td>
                  <span className="tag">General</span>
                </td>
                <td>16/11 09:15</td>
                <td>
                  <div className="table-actions">
                    <Link to="/tutor/preguntas/detalle" className="btn btn-ghost">
                      Ver detalle
                    </Link>
                    <Link to="/tutor/preguntas/detalle" className="btn btn-ghost">
                      Responder
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>¿Puedo cambiar de tutor a mitad del semestre?</td>
                <td>María Pérez</td>
                <td>
                  <span className="tag">Programa</span>
                </td>
                <td>15/11 18:00</td>
                <td>
                  <div className="table-actions">
                    <Link to="/tutor/preguntas/detalle" className="btn btn-ghost">
                      Ver detalle
                    </Link>
                    <Link to="/tutor/preguntas/detalle" className="btn btn-ghost">
                      Responder
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>¿Cuántas tutorías puedo pedir por materia?</td>
                <td>Carlos López</td>
                <td>
                  <span className="tag">Plan</span>
                </td>
                <td>15/11 17:30</td>
                <td>
                  <div className="table-actions">
                    <Link to="/tutor/preguntas/detalle" className="btn btn-ghost">
                      Ver detalle
                    </Link>
                    <Link to="/tutor/preguntas/detalle" className="btn btn-ghost">
                      Responder
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="helper-text">
          * Desde aquí el tutor prioriza qué preguntas atender primero.
        </p>
      </section>
    </div>
  );
}

export default TutorQuestions;
