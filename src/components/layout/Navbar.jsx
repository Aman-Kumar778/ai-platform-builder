import React from "react";
import "./Navbar.css";
import { BookOpen, Home, Trophy, Menu, LogOut, User } from "lucide-react";

const Navbar = ({
  view,
  setView,
  userType,
  currentUser,
  showMobileMenu,
  setShowMobileMenu,
  logout,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <BookOpen size={28} className="logo-icon" />
          <span className="logo-text">Learn & Grow</span>
        </div>

        <div className="navbar-links">
          <button
            className={view === "home" ? "nav-btn active" : "nav-btn"}
            onClick={() => setView("home")}
          >
            <Home size={18} /> Home
          </button>

          <button
            className={view === "courses" ? "nav-btn active" : "nav-btn"}
            onClick={() => setView("courses")}
          >
            <BookOpen size={18} /> Courses
          </button>

          {userType === "candidate" && (
            <button
              className={view === "progress" ? "nav-btn active" : "nav-btn"}
              onClick={() => setView("progress")}
            >
              <Trophy size={18} /> My Progress
            </button>
          )}
        </div>

        <div className="navbar-right">
          <div className="user-info">
            <User size={18} />
            <span>{currentUser}</span>
          </div>

          <button className="logout-btn" onClick={logout}>
            <LogOut size={20} />
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu">
          <button
            onClick={() => {
              setView("home");
              setShowMobileMenu(false);
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              setView("courses");
              setShowMobileMenu(false);
            }}
          >
            Courses
          </button>
          {userType === "candidate" && (
            <button
              onClick={() => {
                setView("progress");
                setShowMobileMenu(false);
              }}
            >
              My Progress
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
