# AI-Powered Course Builder & Learning Platform

## 📌 Introduction

The **AI-Powered Course Builder & Learning Platform** is a modern, interactive learning system designed to solve a major limitation of traditional online courses — static content and long, passive videos.

This platform allows **Admins** to generate complete, structured courses using **AI**, while **Candidates (Learners)** experience a guided, stage-wise learning flow with quizzes, assignments, progress tracking, and certification.

The system follows a **two-login architecture**:
- **Admin** → creates and manages AI-generated courses
- **Candidate** → consumes courses, completes modules, and earns certificates

The entire project is built using **React (frontend)** with **plain CSS**, focusing on clarity, scalability, and ease of demonstration.

---

## 🚀 Features Overview

### 🔑 Admin Side
- AI-powered course generation from a single topic
- Auto-generated:
  - Course structure
  - Modules
  - Content
  - Quizzes (MCQs)
  - Assignments
- Manual editing of courses and modules
- Reordering, adding, and removing stages
- Progress analytics of candidates

### 🎓 Candidate Side
- Browse available courses
- Stage-wise learning (module by module)
- Quiz-based evaluation (auto-graded)
- Assignment completion gating
- Progress tracking
- Course completion score
- Certificate / badge on completion

---

## 🧠 AI Usage in the Project

The platform uses an **AI-driven course generation engine**.

- Admin enters a **topic**
- AI auto-generates:
  - Course title & description
  - Multiple modules
  - Learning content
  - Quiz questions
  - Practical assignments

### 🛠 AI Implementation Details
For this prototype:
- AI responses are **simulated client-side**
- Logic is **prompt-driven and structured**
- Output format mimics real LLM responses (GPT / Claude / Gemini)

📌 In production, the same prompt logic can be connected to real AI APIs.

---

## 🏗️ Tech Stack

- **Frontend:** React (Create React App)
- **Styling:** Plain CSS (component-level CSS files)
- **Icons:** lucide-react
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence:** Local state (can be extended to backend)

---

## 📂 Project Structure
 src/
│── App.jsx
│── components/
│   ├── AdminHome.jsx
│   ├── AdminCourseEditor.jsx
│   ├── AdminAnalytics.jsx
│   ├── CoursesView.jsx
│   ├── LearningView.jsx
│   ├── ProgressView.jsx
│   ├── CertificateView.jsx
│── utils/
│   └── aiCourseEngine.js



---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later)
- **npm** (comes with Node.js)

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-course-platform.git
cd ai-platform-builder
```

###3️⃣ Install Dependencies
    npm install


    Dependencies used:

    react

    react-dom

    lucide-react

###▶️ Running the Project

Start the development server:

npm start


    The application will open automatically at:

http://localhost:3000

##🔐 Application Flow
Login

On launch, users choose:

Admin Login

Candidate Login

##🧩 Component Functionality Breakdown
🔹 App.jsx

Main application controller

Manages:

Authentication state

Current view

Courses

Progress

Assignments

Certificates

Handles navigation between Admin and Candidate flows

🔹 AdminHome.jsx

Admin dashboard

AI-based course generation input

Displays overall statistics

Entry point for course creation

🔹 AdminCourseEditor.jsx

Allows admins to:

Edit course title & description

Add / remove modules

Edit module content

Reorder modules

Ensures flexibility after AI generation

🔹 AdminAnalytics.jsx

Displays candidate progress analytics

Shows:

Module completion counts

Progress bars per course

Helps admins track learning effectiveness

🔹 CoursesView.jsx

Displays all available courses

Shows:

Course details

Progress indicators

Allows candidates to start learning

🔹 LearningView.jsx

Core learning interface

Displays:

Module content

Quiz questions

Assignment tasks

Enforces:

Quiz pass requirement

Assignment completion

Stage-wise progression

🔹 ProgressView.jsx

Candidate progress dashboard

Shows:

Courses completed

Modules finished

Overall progress percentage

Certificate badges

🔹 CertificateView.jsx

Shown when a course is fully completed

Displays:

Course title

Completion score

Issue date

Certification badge

🔹 aiCourseEngine.js

Simulated AI engine

Converts a topic into:

Structured course data

Modules

Quizzes

Assignments

Easily replaceable with real AI APIs

🏆 Core Requirements Fulfilled

✔ AI-generated course creation
✔ Admin course builder and editor
✔ Stage-wise learning flow
✔ Auto-evaluated quizzes
✔ Assignment-based progression
✔ Candidate progress tracking
✔ Admin analytics dashboard
✔ Completion score and certificate

📌 Future Enhancements (Optional)

Real AI API integration (OpenAI / Claude)

Backend with authentication

Multilingual course generation

Voice-based learning

Downloadable certificates (PDF)

Gamification (XP, levels, streaks)

📄 License

This project is created for educational and demonstration purposes.

🙌 Author

Developed by Aman Kumar
AI-Powered Learning Platform Project

