import React from "react";

const SkillItem: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div className="skill-item">{skill}</div>
  );
};

export default SkillItem;
