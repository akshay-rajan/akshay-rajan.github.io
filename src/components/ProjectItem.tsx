import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem: React.FC<{
  title: string;
  technologies: string[];
  link?: string;
  github?: string;
  description?: string[];
}> = ({ title, technologies, link, github, description }) => {
  return (
    <div className="project-item">
      <div className="project-title">
        <strong className="name">{title}</strong>
        <div className="technologies">
          {technologies.join(", ")}
        </div>
      </div>
      <div className="project-links">
        {link && <a href={link} target="_blank" rel="noopener noreferrer">Visit <FaExternalLinkAlt /></a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub <FaExternalLinkAlt /></a>}
      </div>
      {description && 
        <div className="project-description">
          {description.map((desc, index) => 
            <span key={index}>{desc} </span>
          )}
        </div>
      }
    </div>
  );
}

export default ProjectItem;
