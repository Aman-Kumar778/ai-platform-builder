import React, { useState } from "react";
import "./AdminHome.css";
import AdminCourseEditor from "./AdminCourseEditor";
import AdminAnalytics from "./AdminAnalytics";

const AdminHome = ({
  courses,
  setCourses,
  generateCourseWithAI,
  generating,
  progress,
}) => {
  const [topic, setTopic] = useState("");

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Create and manage skill-based courses</p>
      </div>

      {/* AI Course Generator */}
      <div className="admin-card">
        <h2>🤖 Create New Course with AI</h2>
        <p className="sub-text">
          Enter a topic and AI will generate a complete course
        </p>

        <input
          type="text"
          placeholder="Enter course topic (e.g., Carpentry, Mobile Repair)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          className="btn btn-primary"
          disabled={!topic || generating}
          onClick={() => generateCourseWithAI(topic)}
        >
          {generating ? "⏳ Generating Course..." : "✨ Generate Course"}
        </button>
      </div>

      {/* Stats */}
      <div className="admin-stats">
        <div className="stat-card blue">
          <h3>{courses.length}</h3>
          <p>Total Courses</p>
        </div>

        <div className="stat-card green">
          <h3>{courses.reduce((acc, c) => acc + c.modules.length, 0)}</h3>
          <p>Total Modules</p>
        </div>

        <div className="stat-card purple">
          <h3>150+</h3>
          <p>Active Students</p>
        </div>
      </div>

      {/* ✅ Course Editor */}
      <AdminCourseEditor courses={courses} setCourses={setCourses} />
      <AdminAnalytics courses={courses} progress={progress} />
    </div>
  );
};

export default AdminHome;
