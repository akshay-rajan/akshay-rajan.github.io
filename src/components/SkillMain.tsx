import React from "react";

const SkillMain: React.FC<{ title: string, logo: string, description: string }> = ({ title, logo, description }) => {
  return (
    <div className="skill-main-item">
      <div className="skill-main-left">
        <div className="skill-logo">
          <img src={logo} alt={`${title} logo`} />
        </div>
      </div>
      <div className="skill-main-right">
        <div className="skill-title">{title}</div>
        <p className="skill-desc">{description}</p>
      </div>
    </div>
  );
};

export default SkillMain;
