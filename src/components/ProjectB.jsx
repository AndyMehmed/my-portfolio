import React from "react";
import ProjectCard from "./ProjectCard";
import projectAImage from "../assets/project-a.jpg"; // Lägg till bilden i /assets/

const ProjectA = () => {
  return <ProjectCard title="Project A" image={projectAImage} link="/project-a" />;
};

export default ProjectA;
