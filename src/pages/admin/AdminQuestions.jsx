import React from "react";

function AdminQuestions() {
  return (
    <div className="page">
      {/* Encabezado de la página */}
      <div className="page-header">
        <h1 className="page-title">Gestión de Preguntas</h1>
        <div className="page-header-actions">
          <button className="btn btn-secondary">Ver solo pendientes</button>
        </div>
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
              <option>Todos</option>
              <option>Pendiente</option>
              <option>Publicada</option>
              <option>Corregida</option>
              <option>Rechazada</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Tutor</label>
            <select className="filter-input">
              <option>Todos</option>
              <option>Sin asignar</option>
              <option>Tutor 1</option>
              <option>Tutor 2</option>
            </select>
          </div>

          <div className="filter-group filter-group-small">
            <label className="filter-label">&nbsp;</label>
            <button className="btn btn-secondary">Limpiar</button>
          </div>
        </div>
      </section>

      {/* Resumen rápido */}
      <section className="section">
        <h2 className="section-title">Resumen</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Total preguntas</div>
            <div className="card-value">[ 120 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Pendientes</div>
            <div className="card-value">[ 15 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Rechazadas</div>
            <div className="card-value">[ 8 ]</div>
          </div>
        </div>
      </section>

      {/* Tabla de preguntas */}
      <section className="section">
        <h2 className="section-title">Listado de preguntas</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Estudiante</th>
                <th>Alcance</th>
                <th>Estado</th>
                <th>Tutor</th>
                <th>Fecha</th>
                <th style={{ width: "160px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Cómo me inscribo a una tutoría?</td>
                <td>Sinoe Hernández</td>
                <td>
                  <span className="tag">General</span>
                </td>
                <td>
                  <span className="status-pill status-pendiente">
                    Pendiente
                  </span>
                </td>
                <td>Sin asignar</td>
                <td>16/11 09:30</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver detalle</button>
                    <button className="btn btn-ghost">Asignar tutor</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>¿Cuántas tutorías puedo solicitar por semestre?</td>
                <td>María Pérez</td>
                <td>
                  <span className="tag">Programa</span>
                </td>
                <td>
                  <span className="status-pill status-publicada">
                    Publicada
                  </span>
                </td>
                <td>Tutor 1</td>
                <td>15/11 17:10</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver detalle</button>
                    <button className="btn btn-ghost">Historial</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  ¿Qué pasa si repruebo una materia y quiero regularizarme con
                  tutorías?
                </td>
                <td>Carlos López</td>
                <td>
                  <span className="tag">Plan</span>
                </td>
                <td>
                  <span className="status-pill status-corregida">
                    Corregida
                  </span>
                </td>
                <td>Tutor 2</td>
                <td>14/11 11:45</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver detalle</button>
                    <button className="btn btn-ghost">Ver historial</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Pregunta fuera de alcance del sistema</td>
                <td>Ana Torres</td>
                <td>
                  <span className="tag">Semestre</span>
                </td>
                <td>
                  <span className="status-pill status-rechazada">
                    Rechazada
                  </span>
                </td>
                <td>Tutor 1</td>
                <td>13/11 08:20</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver detalle</button>
                    <button className="btn btn-ghost">Motivo rechazo</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="helper-text">
          * Esta vista permite al administrador supervisar todas las preguntas,
          ver su estado, alcance y tutor responsable.
        </p>
      </section>
    </div>
  );
}

export default AdminQuestions;
