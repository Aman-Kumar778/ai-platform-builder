import React from "react";
import "./CoursesView.css";
import { BookOpen, Play, Clock, Star } from "lucide-react";

const CoursesView = ({ courses, userType, progress, startCourse }) => {
  return (
    <div className="courses-container">
      <h1 className="courses-title">Available Courses</h1>

      <div className="courses-grid">
        {courses.map((course) => {
          const completed = progress[course.id]?.completed?.length || 0;
          const total = course.modules.length;
          const percentage = (completed / total) * 100;

          return (
            <div className="course-card" key={course.id}>
              <div className="course-banner">
                <BookOpen size={48} />
              </div>

              <div className="course-body">
                <h3>{course.title}</h3>
                <p className="course-desc">{course.description}</p>

                <div className="course-meta">
                  <span>
                    <Clock size={16} /> {course.duration}
                  </span>
                  <span>
                    <Star size={16} /> {course.level}
                  </span>
                </div>

                {userType === "candidate" && (
                  <div className="course-progress">
                    <div className="progress-info">
                      <span>Progress</span>
                      <span>
                        {completed}/{total}
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <button
                  className="btn btn-primary full"
                  onClick={() => startCourse(course)}
                >
                  <Play size={18} />
                  {userType === "candidate"
                    ? "Start Learning"
                    : "Preview Course"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesView;
