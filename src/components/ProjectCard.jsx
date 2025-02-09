import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, icon, link }) => {
  return (
    <Link to={link} className="project-card">
      <div className="card-content">
        <span className="icon">{icon}</span>
        <span className="title">{title}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
