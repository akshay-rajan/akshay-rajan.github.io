import React from "react";

const ProjectItem: React.FC<{
  title: string;
  technologies: string[];
  link?: string;
  github?: string;
  description?: string[];
}> = ({ title, technologies, link, github, description }) => {
  return (
    <div className="project-item">
      <strong>{title}</strong>
      <div className="project-technologies">
        {technologies.join(", ")}
      </div>
      <div className="project-links">
        {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
      {description && 
        <div className="project-description">
          {description.map((desc, index) => 
            <span key={index}>{desc}</span>
          )}
        </div>
      }
    </div>
  );
}

export default ProjectItem;
