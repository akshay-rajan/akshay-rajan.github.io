import React from "react";


const ExperienceItem: React.FC<{
  title: string;
  company: string;
  year: string;
  description?: string[];
  role?: string;
}> = ({ title, company, year, description, role }) => {
  return (
    <div className="experience-item">
      <div className="left">
        <div>{year}</div>
      </div>
      <div className="right">
        <div className="title">
          <strong>{title}</strong> • {company} 
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
  );
}

export default ExperienceItem;
