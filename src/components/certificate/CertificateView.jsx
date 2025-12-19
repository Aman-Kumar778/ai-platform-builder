import React from "react";
import "./CertificateView.css";

const CertificateView = ({ certificate, setView }) => {
  if (!certificate) return null;

  return (
    <div className="certificate-container">
      <div className="certificate-card">
        <h1>🎓 Certificate of Completion</h1>

        <p>This certifies that</p>
        <h2>Student</h2>

        <p>has successfully completed the course</p>
        <h3>{certificate.courseTitle}</h3>

        <p className="score">
          Completion Score: <strong>{certificate.score}%</strong>
        </p>

        <p className="date">Issued on: {certificate.issuedAt}</p>

        <div className="badge">🏅 SKILL CERTIFIED</div>

        <button className="btn btn-primary" onClick={() => setView("progress")}>
          Go to My Progress
        </button>
      </div>
    </div>
  );
};

export default CertificateView;
