import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="project-card">
      <div className="image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="overlay">
        <h3 className="title">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
