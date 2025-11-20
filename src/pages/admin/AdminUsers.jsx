import React from "react";

function AdminUsers() {
  return (
    <div className="page">
      {/* Encabezado de la página */}
      <div className="page-header">
        <h1 className="page-title">Gestión de Usuarios</h1>
        <div className="page-header-actions">
          <button className="btn btn-primary">Crear usuario</button>
        </div>
      </div>

      {/* Filtros de búsqueda */}
      <section className="section">
        <h2 className="section-title">Filtros</h2>
        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">Buscar</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Nombre o correo"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Rol</label>
            <select className="filter-input">
              <option>Todos</option>
              <option>ADMIN</option>
              <option>TUTOR</option>
              <option>ESTUDIANTE</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Estado</label>
            <select className="filter-input">
              <option>Todos</option>
              <option>ACTIVO</option>
              <option>DESHABILITADO</option>
              <option>PENDIENTE</option>
            </select>
          </div>

          <div className="filter-group filter-group-small">
            <label className="filter-label">&nbsp;</label>
            <button className="btn btn-secondary">Limpiar</button>
          </div>
        </div>
      </section>

      {/* Tabla de usuarios */}
      <section className="section">
        <h2 className="section-title">Lista de usuarios</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Último acceso</th>
                <th style={{ width: "180px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sinoe Hernández</td>
                <td>sinoe@example.com</td>
                <td>ADMIN</td>
                <td>ACTIVO</td>
                <td>16/11 10:23</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver</button>
                    <button className="btn btn-ghost">Editar</button>
                    <button className="btn btn-ghost">Deshabilitar</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>María Pérez</td>
                <td>maria.tutor@example.com</td>
                <td>TUTOR</td>
                <td>ACTIVO</td>
                <td>15/11 18:40</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver</button>
                    <button className="btn btn-ghost">Editar</button>
                    <button className="btn btn-ghost">Deshabilitar</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Carlos López</td>
                <td>carlos.alumno@example.com</td>
                <td>ESTUDIANTE</td>
                <td>PENDIENTE</td>
                <td>-</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver</button>
                    <button className="btn btn-ghost">Editar</button>
                    <button className="btn btn-ghost">Activar</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Ana Torres</td>
                <td>ana.tutor@example.com</td>
                <td>TUTOR</td>
                <td>DESHABILITADO</td>
                <td>10/11 09:15</td>
                <td>
                  <div className="table-actions">
                    <button className="btn btn-ghost">Ver</button>
                    <button className="btn btn-ghost">Editar</button>
                    <button className="btn btn-ghost">Reactivar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="helper-text">
          * Todos los datos son de ejemplo. En la versión final se mostrarán los
          usuarios reales de TutorLink.
        </p>
      </section>
    </div>
  );
}

export default AdminUsers;
