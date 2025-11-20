import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function TutorLayout() {
  return (
    <div className="app-shell">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">Menú tutor</div>
        <div className="topbar-right">Perfil tutor</div>
      </header>

      {/* Layout con sidebar + contenido */}
      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-title">TutorLink Tutor</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/tutor/dashboard"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/tutor/preguntas"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Preguntas pendientes
            </NavLink>
            <NavLink
              to="/tutor/historial"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " sidebar-link-active" : "")
              }
            >
              Historial de respuestas
            </NavLink>
            <NavLink
              to="/tutor/perfil"
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

export default TutorLayout;
