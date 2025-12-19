import React from "react";
import "./LearningView.css";
import { CheckCircle } from "lucide-react";

const LearningView = ({
  selectedCourse,
  currentModule,
  quizAnswers,
  setQuizAnswers,
  showResults,
  submitQuiz,
  nextModule,
  setShowResults,
  setView,
  progress,
  assignments,
  submitAssignment,
}) => {
  const module = selectedCourse.modules[currentModule];
  const assignmentKey = `${selectedCourse.id}_${currentModule}`;

  const isLastModule = currentModule === selectedCourse.modules.length - 1;

  return (
    <div className="learning-container">
      <button className="back-btn" onClick={() => setView("courses")}>
        ← Back to Courses
      </button>

      <div className="learning-card">
        <div className="learning-header">
          <h1>{selectedCourse.title}</h1>
          <span>
            Module {currentModule + 1}/{selectedCourse.modules.length}
          </span>
        </div>

        <h2>{module.title}</h2>

        <div className="learning-content">
          <p>{module.content}</p>
        </div>

        {/* Quiz */}
        {!showResults && (
          <div className="quiz-section">
            <h3>Quiz Time 📝</h3>

            {module.quiz.map((q, idx) => (
              <div className="quiz-card" key={idx}>
                <p className="quiz-question">
                  {idx + 1}. {q.q}
                </p>

                {q.options.map((opt, optIdx) => (
                  <label className="quiz-option" key={optIdx}>
                    <input
                      type="radio"
                      name={`q${idx}`}
                      checked={quizAnswers[idx] === optIdx}
                      onChange={() =>
                        setQuizAnswers({ ...quizAnswers, [idx]: optIdx })
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}

            <button
              className="btn btn-success full"
              onClick={submitQuiz}
              disabled={Object.keys(quizAnswers).length !== module.quiz.length}
            >
              Submit Quiz
            </button>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div
            className={showResults.passed ? "result success" : "result fail"}
          >
            <h3>{showResults.passed ? "Great Job! 🎉" : "Keep Trying 😔"}</h3>
            <p>
              Score: {showResults.score}/{showResults.total}
            </p>

            {/* ✅ ASSIGNMENT SECTION (ONLY IF PASSED QUIZ) */}
            {showResults.passed && (
              <div className="assignment-box">
                <h4>📌 Assignment</h4>
                <p>
                  {module.assignment?.task ||
                    "No assignment for this module. You can proceed."}
                </p>

                {!assignments[assignmentKey] ? (
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      submitAssignment(selectedCourse.id, currentModule)
                    }
                  >
                    Mark Assignment as Completed
                  </button>
                ) : (
                  <p className="assignment-done">✅ Assignment Completed</p>
                )}
              </div>
            )}

            {/* ✅ NEXT MODULE BUTTON (ONLY AFTER ASSIGNMENT COMPLETION) */}
            {showResults.passed && assignments[assignmentKey] && (
              <button className="btn btn-success" onClick={nextModule}>
                {isLastModule ? "🎓 Complete Course" : "Next Module →"}
              </button>
            )}

            {!showResults.passed && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setQuizAnswers({});
                  setShowResults(false);
                }}
              >
                Try Again
              </button>
            )}
          </div>
        )}
      </div>

      {/* Module Indicators */}
      <div className="module-indicators">
        {selectedCourse.modules.map((_, idx) => (
          <div
            key={idx}
            className={
              progress[selectedCourse.id]?.completed?.includes(idx)
                ? "indicator completed"
                : idx === currentModule
                ? "indicator active"
                : "indicator"
            }
          >
            {progress[selectedCourse.id]?.completed?.includes(idx) ? (
              <CheckCircle size={20} />
            ) : (
              idx + 1
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningView;
