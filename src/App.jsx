import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectA from "./components/ProjectA";
import ProjectB from "./components/ProjectB";
import ProjectC from "./components/ProjectC";
import ProjectAPage from "./pages/ProjectAPage";  // Skapa denna nya sida
import ProjectBPage from "./pages/ProjectBPage";  // Skapa denna nya sida
import ProjectCPage from "./pages/ProjectCPage";  // Skapa denna nya sida
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          {/* Hem / Startsida med alla projekt */}
          <Route path="/" element={
            <>
              <ProjectA />
              <ProjectB />
              <ProjectC />
            </>
          } />
          
          {/* Sidor för varje projekt */}
          <Route path="/project-a" element={<ProjectAPage />} />
          <Route path="/project-b" element={<ProjectBPage />} />
          <Route path="/project-c" element={<ProjectCPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
