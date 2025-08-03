import React from "react";
import { PROJECTS } from "../config";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      {PROJECTS.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
