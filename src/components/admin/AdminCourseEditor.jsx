import React, { useState } from "react";
import "./AdminCourseEditor.css";

const AdminCourseEditor = ({ courses, setCourses }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);

  const updateCourses = (updatedCourse) => {
    const updatedCourses = courses.map((c) =>
      c.id === updatedCourse.id ? updatedCourse : c
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const updateModule = (index, field, value) => {
    const updatedModules = [...selectedCourse.modules];
    updatedModules[index] = {
      ...updatedModules[index],
      [field]: value,
    };

    updateCourses({ ...selectedCourse, modules: updatedModules });
  };

  const addModule = () => {
    const newModule = {
      id: "m_" + Date.now(),
      title: "New Module",
      content: "Enter module content here",
      quiz: [],
      assignment: {
        task: "Add assignment task",
      },
    };

    updateCourses({
      ...selectedCourse,
      modules: [...selectedCourse.modules, newModule],
    });
  };

  const deleteModule = (index) => {
    const updatedModules = selectedCourse.modules.filter((_, i) => i !== index);
    updateCourses({ ...selectedCourse, modules: updatedModules });
  };

  const moveModule = (index, direction) => {
    const modules = [...selectedCourse.modules];
    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= modules.length) return;

    [modules[index], modules[targetIndex]] = [
      modules[targetIndex],
      modules[index],
    ];

    updateCourses({ ...selectedCourse, modules });
  };

  return (
    <div className="editor-container">
      <h2>🛠 Admin Course Editor</h2>

      <select
        value={selectedCourseId || ""}
        onChange={(e) => setSelectedCourseId(e.target.value)}
      >
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.title}
          </option>
        ))}
      </select>

      {selectedCourse && (
        <>
          <h3>Modules</h3>

          {selectedCourse.modules.map((mod, idx) => (
            <div key={mod.id} className="module-editor-card">
              <input
                type="text"
                value={mod.title}
                onChange={(e) => updateModule(idx, "title", e.target.value)}
              />

              <textarea
                value={mod.content}
                onChange={(e) => updateModule(idx, "content", e.target.value)}
              />

              <div className="editor-actions">
                <button onClick={() => moveModule(idx, -1)}>⬆</button>
                <button onClick={() => moveModule(idx, 1)}>⬇</button>
                <button onClick={() => deleteModule(idx)}>🗑 Delete</button>
              </div>
            </div>
          ))}

          <button className="add-module-btn" onClick={addModule}>
            ➕ Add New Module
          </button>
        </>
      )}
    </div>
  );
};

export default AdminCourseEditor;
