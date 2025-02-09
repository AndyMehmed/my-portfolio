import React from "react";
import "../index.css";

const ProjectCard = ({ title, icon }) => {
  return (
    <div className="project-card">
      <span style={{ fontSize: "40px", marginRight: "10px" }}>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default ProjectCard;
