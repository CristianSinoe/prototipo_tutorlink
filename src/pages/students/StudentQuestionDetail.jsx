import React from "react";

function StudentQuestionDetail() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Detalle de mi pregunta</h1>
      </div>

      {/* META */}
      <section className="section">
        <h2 className="section-title">Información general</h2>
        <div className="question-meta-grid">
          <div className="question-meta-item">
            <div className="question-meta-label">ID</div>
            <div className="question-meta-value">#102</div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Fecha de envío</div>
            <div className="question-meta-value">15/11 17:50</div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Estado</div>
            <div className="question-meta-value">
              <span className="status-pill status-publicada">
                Respondida
              </span>
            </div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Alcance</div>
            <div className="question-meta-value">
              <span className="tag">General</span>
            </div>
          </div>
          <div className="question-meta-item">
            <div className="question-meta-label">Tutor que respondió</div>
            <div className="question-meta-value">Tutor 1</div>
          </div>
        </div>
      </section>

      {/* PREGUNTA */}
      <section className="section">
        <h2 className="section-title">Mi pregunta</h2>
        <div className="question-box">
          ¿Cómo agendo una tutoría para regularizarme en la materia de
          programación avanzada y cuántas sesiones puedo solicitar por
          semestre?
        </div>
      </section>

      {/* RESPUESTA */}
      <section className="section">
        <h2 className="section-title">Respuesta del tutor</h2>
        <div className="answer-box">
          Para agendar una tutoría, debes entrar al sistema institucional de
          tutorías, seleccionar la materia y elegir un horario disponible del
          tutor asignado. Por lo general, puedes solicitar hasta dos sesiones
          por materia cada semestre, pero esto puede variar según la carga de
          trabajo y la disponibilidad. Te recomendamos revisar el reglamento de
          tutorías de tu programa.
        </div>
      </section>

      {/* NOTAS ADICIONALES */}
      <section className="section">
        <h2 className="section-title">Notas adicionales</h2>
        <p className="helper-text">
          * En la versión final aquí podrían mostrarse enlaces a documentos,
          reglamentos o recursos sugeridos por el tutor.
        </p>
      </section>
    </div>
  );
}

export default StudentQuestionDetail;
