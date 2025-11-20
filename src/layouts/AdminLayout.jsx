import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="app-shell">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">Menú admin</div>
        <div className="topbar-right">Perfil usuario</div>
      </header>

      {/* Layout con sidebar + contenido */}
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-title">TutorLink Admin</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/usuarios"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Usuarios
            </NavLink>
            <NavLink
              to="/admin/preguntas"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Preguntas
            </NavLink>
            <NavLink
              to="/admin/auditoria"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Auditoría
            </NavLink>
            <NavLink
              to="/admin/perfil"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Perfil
            </NavLink>
          </nav>
        </aside>

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
