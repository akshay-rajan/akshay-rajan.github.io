import React from "react";
import { PROJECTS } from "../config";
import ProjectItem from "./ProjectItem";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      {PROJECTS.map((project, index) => (
        <ProjectItem key={index} index={index} {...project} show={showAll} />
      ))}
      {PROJECTS.length > 2 && (
        <button className="project-toggle" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Less" : "More"} {showAll ? <IoMdArrowDropup className="more" /> : <IoMdArrowDropdown className="less" />}
        </button>
      )}
    </section>
  );
}

export default Projects;
