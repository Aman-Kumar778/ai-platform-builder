import React from "react";
import "./AdminAnalytics.css";

const AdminAnalytics = ({ courses, progress }) => {
  return (
    <div className="analytics-container">
      <h2>📊 Candidate Progress Analytics</h2>

      {courses.map((course) => {
        const courseProgress = progress[course.id];
        const completedModules = courseProgress?.completed?.length || 0;
        const totalModules = course.modules.length;

        const completionPercent =
          totalModules > 0
            ? Math.round((completedModules / totalModules) * 100)
            : 0;

        return (
          <div className="analytics-card" key={course.id}>
            <h3>{course.title}</h3>

            <p>
              Modules Completed:{" "}
              <strong>
                {completedModules}/{totalModules}
              </strong>
            </p>

            <div className="analytics-bar">
              <div
                className="analytics-fill"
                style={{ width: `${completionPercent}%` }}
              />
            </div>

            <p className="analytics-percent">{completionPercent}% completed</p>
          </div>
        );
      })}

      {courses.length === 0 && <p>No courses available yet.</p>}
    </div>
  );
};

export default AdminAnalytics;
