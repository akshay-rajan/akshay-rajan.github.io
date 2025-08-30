import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectItem: React.FC<{
  title: string;
  technologies: string[];
  index: number;
  description: string[];
  show: boolean;
  link?: string;
  github?: string;
  image?: string;
}> = ({ title, technologies, index, link, github, description, image, show }) => {
  const handleVisitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`project-item-container ${index > 1 && !show && "hidden"}`}>
      {github &&
        <a
          href={github}
          target="_blank"
          className="project-item-link"
          rel="noopener noreferrer"
        >
          <div className="project-item">
            <div className="project-title">
              <strong className="name">
                {title} <MdArrowOutward className="external-link-icon" />
              </strong>
              <div className="technologies">
                {technologies.join(", ")}
              </div>
            </div>
            <div className="project-links">
              {link && (
                <span 
                  className="project-link"
                  onClick={handleVisitClick}
                  style={{ cursor: 'pointer' }}
                >
                  Visit <MdArrowOutward />
                </span>
              )}
            </div>
            <div className="project-description">
              {image &&
                <img
                  src={image}
                  alt={`${title} screenshot`}
                  className="project-image"
                  onError={(e) => {
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
        </a>
      }
    </div>
  );
}

export default ProjectItem;