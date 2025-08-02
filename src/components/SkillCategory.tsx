import React from 'react';
import SkillItem from './SkillItem';

const SkillCategory: React.FC<{ category: string; skills: string[] }> = ({ category, skills }) => {
  return (
    <div className="skill-category">
      <div className="category-name">{category}</div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
