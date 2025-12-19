import React, { useEffect, useState } from "react";

/* ===== Components ===== */
import LoginScreen from "./components/auth/LoginScreen";
import Navbar from "./components/layout/Navbar";
import AdminHome from "./components/admin/AdminHome";
import CandidateHome from "./components/candidate/CandidateHome";
import CoursesView from "./components/course/CoursesView";
import LearningView from "./components/course/LearningView";
import ProgressView from "./components/progress/ProgressView";
import { generateAICourse } from "./utils/aiCourseGenerator";
import CertificateView from "./components/certificate/CertificateView";

/* ===== Global Styles ===== */
import "./index.css";

const App = () => {
  /* ===== Auth & Navigation ===== */
  const [userType, setUserType] = useState(null); // admin | candidate
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  /* ===== Course Data ===== */
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);

  /* ===== Quiz State ===== */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  /* ===== Progress Tracking ===== */
  const [progress, setProgress] = useState({});

  /* ===== AI Course Generation ===== */
  const [generating, setGenerating] = useState(false);
  const [assignments, setAssignments] = useState({});

  // certificate submission state
  const [certificates, setCertificates] = useState({});

  /* ===== Sample Courses (Initial Data) ===== */
  useEffect(() => {
    const sampleCourses = [
      {
        id: "c1",
        title: "Basic Electrical Work",
        description: "Learn electrical repairs for homes and shops",
        level: "Beginner",
        duration: "2 hours",
        modules: [
          {
            id: "m1",
            title: "Safety First",
            content:
              "Safety is very important when working with electricity. Always turn off the main switch, wear rubber gloves, and work in a dry place.",
            quiz: [
              {
                q: "What should you do before starting electrical work?",
                options: [
                  "Turn off main switch",
                  "Drink water",
                  "Check phone",
                  "Nothing",
                ],
                correct: 0,
              },
              {
                q: "What type of gloves should you wear?",
                options: ["Cloth", "Rubber", "Leather", "None"],
                correct: 1,
              },
            ],
          },
          {
            id: "m2",
            title: "Understanding Wires",
            content:
              "Red wire is Live, Black is Neutral, Green is Earth. Always use correct wire colors.",
            quiz: [
              {
                q: "Which wire is dangerous?",
                options: ["Green", "Black", "Red", "Blue"],
                correct: 2,
              },
            ],
          },
        ],
      },
    ];

    const storedCourses = loadCourses();
    if (storedCourses.length > 0) {
      setCourses(storedCourses);
    } else {
      setCourses(sampleCourses);
      saveCourses(sampleCourses);
    }
  }, []);
  const loadCourses = () => {
    const stored = localStorage.getItem("courses");
    return stored ? JSON.parse(stored) : [];
  };

  const saveCourses = (courses) => {
    localStorage.setItem("courses", JSON.stringify(courses));
  };
  /* ===== AI Course Generator ===== */
  const generateCourseWithAI = (topic) => {
    setGenerating(true);

    setTimeout(() => {
      const newCourse = generateAICourse(topic);
      const updatedCourses = [...courses, newCourse];

      setCourses(updatedCourses);
      saveCourses(updatedCourses);

      setView("courses");
      setGenerating(false);

      alert("✅ AI-generated course added successfully!");
    }, 1000); // simulate AI thinking time
  };

  // moduel generation updation state
  const submitAssignment = (courseId, moduleIndex) => {
    const key = `${courseId}_${moduleIndex}`;
    setAssignments((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  /* ===== Course Flow ===== */
  const startCourse = (course) => {
    setSelectedCourse(course);
    setCurrentModule(0);
    setQuizAnswers({});
    setShowResults(false);
    setView("learning");
  };

  const submitQuiz = () => {
    const module = selectedCourse.modules[currentModule];
    let score = 0;

    module.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });

    const passed = score >= module.quiz.length * 0.6;

    if (passed) {
      const newProgress = { ...progress };

      if (!newProgress[selectedCourse.id]) {
        newProgress[selectedCourse.id] = { completed: [] };
      }

      if (!newProgress[selectedCourse.id].completed.includes(currentModule)) {
        newProgress[selectedCourse.id].completed.push(currentModule);
      }

      setProgress(newProgress);
    }

    setShowResults({
      score,
      total: module.quiz.length,
      passed,
    });
  };

  const nextModule = () => {
    const isLastModule = currentModule === selectedCourse.modules.length - 1;

    // mark current module as completed
    setProgress((prev) => {
      const updated = { ...prev };

      if (!updated[selectedCourse.id]) {
        updated[selectedCourse.id] = { completed: [] };
      }

      if (!updated[selectedCourse.id].completed.includes(currentModule)) {
        updated[selectedCourse.id].completed.push(currentModule);
      }

      return updated;
    });

    if (isLastModule) {
      // 🎓 COURSE COMPLETED
      issueCertificate(selectedCourse);
      setView("certificate");
    } else {
      // ➡ move to next module
      setCurrentModule((prev) => prev + 1);
      setQuizAnswers({});
      setShowResults(false);
    }
  };


  /* ===== Logout ===== */
  const logout = () => {
    setUserType(null);
    setCurrentUser(null);
    setView("home");
  };

  /* ===== Auth Gate ===== */
  if (!userType) {
    return (
      <LoginScreen
        setUserType={setUserType}
        setCurrentUser={setCurrentUser}
        setView={setView}
      />
    );
  }
  /* ===== Certificate Issuance ===== */

  const issueCertificate = (course) => {
    setCertificates((prev) => ({
      ...prev,
      [course.id]: {
        courseTitle: course.title,
        issuedAt: new Date().toLocaleDateString(),
        score: 100, // MVP: full completion score
      },
    }));
  };

  /* ===== App Layout ===== */
  return (
    <div className="page">
      <Navbar
        view={view}
        setView={setView}
        userType={userType}
        currentUser={currentUser}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        logout={logout}
      />

      {view === "home" && userType === "admin" && (
        <AdminHome
          courses={courses}
          setCourses={setCourses}
          generateCourseWithAI={generateCourseWithAI}
          generating={generating}
          progress={progress}
        />
      )}

      {view === "home" && userType === "candidate" && (
        <CandidateHome setView={setView} />
      )}

      {view === "courses" && (
        <CoursesView
          courses={courses}
          userType={userType}
          progress={progress}
          startCourse={startCourse}
        />
      )}

      {view === "learning" && selectedCourse && (
        <LearningView
          selectedCourse={selectedCourse}
          currentModule={currentModule}
          quizAnswers={quizAnswers}
          setQuizAnswers={setQuizAnswers}
          showResults={showResults}
          submitQuiz={submitQuiz}
          nextModule={nextModule}
          setShowResults={setShowResults}
          setView={setView}
          progress={progress}
          assignments={assignments}
          submitAssignment={submitAssignment}
        />
      )}

      {view === "progress" && (
        <ProgressView
          courses={courses}
          progress={progress}
          certificates={certificates}
        />
      )}

      {view === "certificate" && (
        <CertificateView
          certificate={certificates[selectedCourse?.id]}
          setView={setView}
        />
      )}
    </div>
  );
};

export default App;
