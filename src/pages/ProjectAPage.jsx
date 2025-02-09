import React from "react";
import { Link } from "react-router-dom";

const ProjectAPage = () => {
  return (
    <div className="project-container">
      <h1>🚀 Project A</h1>
      <p>Detta är en detaljerad beskrivning av Project A.</p>
      <Link to="/">⬅ Tillbaka till startsidan</Link>
    </div>
  );
};

export default ProjectAPage;
