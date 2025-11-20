import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";
import AdminQuestions from "./pages/admin/AdminQuestions.jsx";
import AdminAudit from "./pages/admin/AdminAudit.jsx";
import AdminProfile from "./pages/admin/AdminProfile.jsx";

import TutorLayout from "./layouts/TutorLayout.jsx";
import TutorDashboard from "./pages/tutor/TutorDashboard.jsx";
import TutorQuestions from "./pages/tutor/TutorQuestions.jsx";
import TutorHistory from "./pages/tutor/TutorHistory.jsx";
import TutorProfile from "./pages/tutor/TutorProfile.jsx";
import TutorQuestionDetail from "./pages/tutor/TutorQuestionDetail.jsx";

import StudentLayout from "./layouts/StudentLayout.jsx";
import StudentDashboard from "./pages/students/StudentDashboard.jsx";
import StudentAsk from "./pages/students/StudentAsk.jsx";
import StudentMyQuestions from "./pages/students/StudentMyQuestions.jsx";
import StudentQuestionDetail from "./pages/students/StudentQuestionDetail.jsx";

function App() {
  return (
    <Routes>
      {/* Por ahora redirigimos la raíz al dashboard admin */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

      {/* Rutas Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="usuarios" element={<AdminUsers />} />
        <Route path="preguntas" element={<AdminQuestions />} />
        <Route path="auditoria" element={<AdminAudit />} />
        <Route path="perfil" element={<AdminProfile />} />
      </Route>

      {/* Rutas Tutor */}
      <Route path="/tutor" element={<TutorLayout />}>
        <Route path="dashboard" element={<TutorDashboard />} />
        <Route path="preguntas" element={<TutorQuestions />} />
        <Route path="preguntas/detalle" element={<TutorQuestionDetail />} />
        <Route path="historial" element={<TutorHistory />} />
        <Route path="perfil" element={<TutorProfile />} />
      </Route>

      {/* Rutas Estudiante */}
      <Route path="/estudiante" element={<StudentLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="preguntar" element={<StudentAsk />} />
        <Route path="mis-preguntas" element={<StudentMyQuestions />} />
        <Route
          path="mis-preguntas/detalle"
          element={<StudentQuestionDetail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
