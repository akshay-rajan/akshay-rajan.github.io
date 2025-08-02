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
      <strong>{title}</strong> at {company} 
      {role && <div>{role}</div>}
      <div>({year})</div>
      {description &&
        <ul className="experience-description">
          {description.map((desc, index) =>
            <li key={index}>{desc}</li>
          )}
        </ul>
      }
    </div>
  );
}

export default ExperienceItem;
