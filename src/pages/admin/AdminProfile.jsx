import React from "react";

function AdminProfile() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Perfil del Administrador</h1>
      </div>

      {/* INFO BÁSICA (solo lectura) */}
      <section className="section">
        <h2 className="section-title">Información básica</h2>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="Sinoe Hernández"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Correo institucional</label>
            <input
              type="email"
              className="form-input form-readonly"
              value="admin01@tutorlink.example.com"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Rol</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="ADMIN"
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Estado de la cuenta</label>
            <input
              type="text"
              className="form-input form-readonly"
              value="ACTIVO"
              readOnly
            />
          </div>
        </div>
        <p className="helper-text">
          * Estos datos son gestionados por el sistema y no pueden modificarse
          desde esta pantalla.
        </p>
      </section>

      {/* CONTACTO / INFO ADICIONAL */}
      <section className="section">
        <h2 className="section-title">Datos de contacto</h2>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-input"
              placeholder="Número de contacto"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Extensión (opcional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="Extensión interna"
            />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Nota / Descripción breve</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Ejemplo: Coordinador de Tutorías de Ingeniería en Software"
            />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-primary">Guardar cambios de contacto</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
      </section>

      {/* PREFERENCIAS */}
      <section className="section">
        <h2 className="section-title">Preferencias de cuenta</h2>
        <div className="form-grid form-grid-single-column">
          <label className="checkbox-row">
            <input type="checkbox" />{" "}
            <span>
              Recibir correo cuando se detecte un inicio de sesión sospechoso
            </span>
          </label>
          <label className="checkbox-row">
            <input type="checkbox" />{" "}
            <span>Recibir resumen diario de actividad del sistema</span>
          </label>
        </div>
        <div className="form-actions">
          <button className="btn btn-primary">Guardar preferencias</button>
        </div>
      </section>

      {/* CAMBIO DE CONTRASEÑA */}
      <section className="section">
        <h2 className="section-title">Cambiar contraseña</h2>
        <form
          className="form-grid"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label className="form-label">Contraseña actual</label>
            <input
              type="password"
              className="form-input"
              placeholder="********"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Nueva contraseña</label>
            <input
              type="password"
              className="form-input"
              placeholder="********"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirmar nueva contraseña</label>
            <input
              type="password"
              className="form-input"
              placeholder="********"
            />
          </div>
        </form>
        <div className="form-actions">
          <button className="btn btn-primary">Guardar nueva contraseña</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
        <p className="helper-text">
          * En la versión final se validará la contraseña actual y las
          políticas de seguridad. Aquí solo se muestra el flujo visual.
        </p>
      </section>
    </div>
  );
}

export default AdminProfile;
