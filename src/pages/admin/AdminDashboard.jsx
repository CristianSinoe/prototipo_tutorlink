import React from "react";

function AdminDashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Dashboard del Administrador</h1>

      {/* RESUMEN RÁPIDO */}
      <section className="section">
        <h2 className="section-title">Resumen rápido</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Estudiantes total</div>
            <div className="card-value">[ 248 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Tutores total</div>
            <div className="card-value">[ 32 ]</div>
          </div>
          <div className="card">
            <div className="card-title">Preguntas pendientes</div>
            <div className="card-value">[ 15 ]</div>
          </div>
        </div>
      </section>

      {/* LOGINS SOSPECHOSOS */}
      <section className="section">
        <h2 className="section-title">Logins sospechosos</h2>
        <div className="card card-full">
          <div className="card-title">Últimos 7 días</div>
          <div className="card-value">[ 4 ]</div>
        </div>
      </section>

      {/* ATAJOS */}
      <section className="section">
        <h2 className="section-title">Atajos</h2>
        <div className="shortcut-buttons">
          <button className="shortcut-button">Crear usuario</button>
          <button className="shortcut-button">Ver todas las preguntas</button>
          <button className="shortcut-button">Ver auditoría</button>
        </div>
      </section>

      {/* ACTIVIDAD RECIENTE */}
      <section className="section">
        <h2 className="section-title">Actividad reciente</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Usuario</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16/11</td>
                <td>admin01</td>
                <td>Creó usuario</td>
              </tr>
              <tr>
                <td>15/11</td>
                <td>tutor03</td>
                <td>Respondió pregunta</td>
              </tr>
              <tr>
                <td>15/11</td>
                <td>user14</td>
                <td>Login sospechoso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
