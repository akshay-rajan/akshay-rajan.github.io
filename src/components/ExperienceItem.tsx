import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ExperienceItem: React.FC<{
  title: string;
  company: string;
  year: string;
  description?: string[];
  role?: string;
  link: string;
}> = ({ title, company, year, description, role, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="experience-item-link">
      <div className="experience-item">
        <div className="left">
          <div>{year}</div>
        </div>
        <div className="right">
          <div className="title">
            <strong>{title}</strong> • {company}
            <MdArrowOutward />
          </div>
          {role && <div className="role">{role}</div>}
          {description &&
            <ul className="experience-description">
              {description.map((desc, index) =>
                <li key={index}>{desc}</li>
              )}
            </ul>
          }
        </div>
      </div>
    </a>
  );
}

export default ExperienceItem;
