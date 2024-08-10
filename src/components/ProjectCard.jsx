import React, { useEffect, useRef } from 'react';
import ProjectImage from './ProjectImage';
import ProjectContent from './ProjectContent';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  // Fade in animation when card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        } else {
          entry.target.classList.remove('fadeIn');
        }
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (index % 2 === 1 || window.innerWidth < 798) ? (
    <div className="project-cards project-card-div" ref={cardRef}>
      <div className="project-card left">
        <ProjectImage project={project} />
      </div>

      <div className="project-card right">
        <ProjectContent project={project} />
      </div>
    </div>
  ) : (
    <div className="project-cards project-card-div" ref={cardRef}>
      <div className="project-card left">
        <ProjectContent project={project} />
      </div>

      <div className="project-card right">
        <ProjectImage project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;