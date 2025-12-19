import React from "react";
import "./CandidateHome.css";
import { BookOpen, Trophy, ArrowRight } from "lucide-react";

const CandidateHome = ({ setView }) => {
  return (
    <div className="candidate-container">
      {/* Header */}
      <div className="candidate-header">
        <h1>Welcome! 👋</h1>
        <p>Learn new skills and improve your career</p>
      </div>

      {/* Cards */}
      <div className="candidate-actions">
        <div className="candidate-card">
          <div className="icon blue">
            <BookOpen size={30} />
          </div>
          <h3>Browse Courses</h3>
          <p>Find courses that match your interests</p>
          <button
            className="btn btn-primary"
            onClick={() => setView("courses")}
          >
            Start Learning <ArrowRight size={18} />
          </button>
        </div>

        <div className="candidate-card">
          <div className="icon green">
            <Trophy size={30} />
          </div>
          <h3>Your Progress</h3>
          <p>Track your learning journey</p>
          <button
            className="btn btn-success"
            onClick={() => setView("progress")}
          >
            View Progress <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateHome;
