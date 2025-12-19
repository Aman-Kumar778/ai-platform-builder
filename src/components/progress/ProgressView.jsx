import React from "react";
import "./ProgressView.css";
import { Award } from "lucide-react";

const ProgressView = ({ courses, progress, certificates }) => {
  const completedCourses = courses.filter(
    (c) => progress[c.id]?.completed?.length === c.modules.length
  );

  return (
    <div className="progress-container">
      <h1>Your Progress</h1>

      {/* Summary */}
      <div className="progress-summary">
        <div className="summary-card blue">
          <h2>{completedCourses.length}</h2>
          <p>Courses Completed</p>
        </div>

        <div className="summary-card green">
          <h2>
            {Object.values(progress).reduce(
              (acc, p) => acc + p.completed.length,
              0
            )}
          </h2>
          <p>Modules Finished</p>
        </div>

        <div className="summary-card purple">
          <h2>
            {Math.round((completedCourses.length / courses.length) * 100) || 0}%
          </h2>
          <p>Overall Progress</p>
        </div>
      </div>

      {/* Course Progress */}
      <div className="course-progress-list">
        {courses.map((course) => {
          const completed = progress[course.id]?.completed?.length || 0;
          const total = course.modules.length;
          const percentage = (completed / total) * 100;

          return (
            <div className="course-progress-card" key={course.id}>
              <div className="course-progress-header">
                <div>
                  <h3>{course.title}</h3>
                  <p>
                    {completed}/{total} modules completed
                  </p>
                </div>

                {certificates?.[course.id] && (
                  <span className="badge-small">🏅 Certified</span>
                )}

                {percentage === 100 && (
                  <Award size={36} className="award-icon" />
                )}
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressView;
