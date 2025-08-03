import React from "react";
import { PROJECTS } from "../config";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      {PROJECTS.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </section>
  );
}

export default Projects;
