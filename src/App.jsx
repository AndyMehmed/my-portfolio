import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectA from "./components/ProjectA";
import ProjectB from "./components/ProjectB";
import ProjectC from "./components/ProjectC";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <ProjectA />
      <ProjectB />
      <ProjectC />
      <Footer />
    </div>
  );
}

export default App;
