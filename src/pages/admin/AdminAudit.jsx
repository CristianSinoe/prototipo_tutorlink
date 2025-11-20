import React from "react";

function AdminAudit() {
  return (
    <div className="page">
      {/* Encabezado */}
      <div className="page-header">
        <h1 className="page-title">Auditoría y eventos de seguridad</h1>
      </div>

      {/* Filtros */}
      <section className="section">
        <h2 className="section-title">Filtros</h2>
        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">Usuario</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Nombre o correo"
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Tipo de evento</label>
            <select className="filter-input">
              <option>Todos</option>
              <option>LOGIN_OK</option>
              <option>LOGIN_SOSPECHOSO</option>
              <option>CAMBIO_ROL</option>
              <option>CREACION_USUARIO</option>
              <option>CAMBIO_ESTADO_USUARIO</option>
              <option>ACCION_TUTOR</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Rango de fechas</label>
            <div className="filter-inline">
              <input
                type="date"
                className="filter-input filter-input-inline"
              />
              <span className="filter-separator">–</span>
              <input
                type="date"
                className="filter-input filter-input-inline"
              />
            </div>
          </div>

          <div className="filter-group filter-group-small">
            <label className="filter-label">&nbsp;</label>
            <button className="btn btn-secondary">Limpiar</button>
          </div>
        </div>
      </section>

      {/* Resumen */}
      <section className="section">
        <h2 className="section-title">Resumen</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Eventos totales (hoy)</div>
            <div className="card-value">[ 42 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Logins sospechosos (hoy)</div>
            <div className="card-value">[ 3 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Cambios de rol (semana)</div>
            <div className="card-value">[ 5 ]</div>
          </div>
        </div>
      </section>

      {/* Tabla de auditoría */}
      <section className="section">
        <h2 className="section-title">Eventos recientes</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Fecha y hora</th>
                <th>Usuario</th>
                <th>Tipo de evento</th>
                <th>Descripción</th>
                <th>IP / Dispositivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16/11 10:23</td>
                <td>admin01</td>
                <td>CREACION_USUARIO</td>
                <td>Creó usuario "maria.tutor@example.com" con rol TUTOR</td>
                <td>192.168.0.10 · Chrome en Windows</td>
              </tr>
              <tr>
                <td>16/11 09:58</td>
                <td>tutor03</td>
                <td>ACCION_TUTOR</td>
                <td>Respondió pregunta ID #102 y la marcó como PUBLICADA</td>
                <td>189.220.xx.xx · Chrome en Android</td>
              </tr>
              <tr>
                <td>16/11 09:40</td>
                <td>user14</td>
                <td>LOGIN_SOSPECHOSO</td>
                <td>
                  Inicio de sesión desde IP nueva. Se envió correo de alerta al
                  usuario.
                </td>
                <td>201.130.xx.xx · Firefox en Linux</td>
              </tr>
              <tr>
                <td>15/11 18:30</td>
                <td>admin01</td>
                <td>CAMBIO_ESTADO_USUARIO</td>
                <td>
                  Cambió estado de usuario "ana.tutor@example.com" a
                  DESHABILITADO
                </td>
                <td>192.168.0.10 · Chrome en Windows</td>
              </tr>
              <tr>
                <td>15/11 17:05</td>
                <td>admin02</td>
                <td>CAMBIO_ROL</td>
                <td>
                  Cambió rol de usuario "carlos.alumno@example.com" de
                  ESTUDIANTE a TUTOR
                </td>
                <td>10.0.0.25 · Edge en Windows</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="helper-text">
          * Esta vista permite al administrador revisar qué ha pasado en el
          sistema, quién hizo qué y desde dónde.
        </p>
      </section>
    </div>
  );
}

export default AdminAudit;
