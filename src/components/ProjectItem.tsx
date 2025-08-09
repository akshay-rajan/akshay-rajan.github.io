import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem: React.FC<{
  title: string;
  technologies: string[];
  link?: string;
  github?: string;
  description: string[];
  image?: string;
}> = ({ title, technologies, link, github, description, image }) => {
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
      <div className="project-description">
        {image &&
          <img
            src={`/resume/${image}`}
            alt={`${title} screenshot`}
            className="project-image"
            onError={(e) => {
              console.log(`Failed to load image: ${image}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        }
        <div className="project-description-desc">
          {description.map((desc, index) =>
            <span className="project-description-text" key={index}>{desc} </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
