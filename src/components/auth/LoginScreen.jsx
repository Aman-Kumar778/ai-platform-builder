import React from "react";
import "./LoginScreen.css";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const LoginScreen = ({ setUserType, setCurrentUser, setView }) => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <BookOpen size={48} color="#fff" />
          </div>
          <h1>Learn & Grow</h1>
          <p>Skill Training Platform</p>
        </div>

        <div className="login-actions">
          <button
            className="btn btn-admin"
            onClick={() => {
              setUserType("admin");
              setCurrentUser("Admin");
              setView("home");
            }}
          >
            <Users size={22} />
            Admin Login
          </button>

          <button
            className="btn btn-student"
            onClick={() => {
              setUserType("candidate");
              setCurrentUser("Student");
              setView("home");
            }}
          >
            <GraduationCap size={22} />
            Student Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
