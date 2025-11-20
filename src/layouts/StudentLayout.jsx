import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <div className="app-shell">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">Menú estudiante</div>
        <div className="topbar-right">Perfil estudiante</div>
      </header>

      {/* Layout con sidebar + contenido */}
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-title">TutorLink Estudiante</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/estudiante/dashboard"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/estudiante/preguntar"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Hacer pregunta
            </NavLink>
            <NavLink
              to="/estudiante/mis-preguntas"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Mis preguntas
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

export default StudentLayout;
