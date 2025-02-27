import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectA from "./components/ProjectA";
import ProjectB from "./components/ProjectB";
import ProjectC from "./components/ProjectC";
import ProjectAPage from "./pages/ProjectAPage";
import ProjectBPage from "./pages/ProjectBPage";
import ProjectCPage from "./pages/ProjectCPage";
import AboutPage from "./pages/AboutPage";  // ✅ Kolla att den importeras
import ContactPage from "./pages/ContactPage";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <ProjectA />
              <ProjectB />
              <ProjectC />
            </>
          } />
          <Route path="/project-a" element={<ProjectAPage />} />
          <Route path="/project-b" element={<ProjectBPage />} />
          <Route path="/project-c" element={<ProjectCPage />} />
          <Route path="/about" element={<AboutPage />} />  {/* ✅ Kolla att denna finns */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
