import React from "react";
import SkillCategory from "./SkillCategory";
import { SKILLS } from "../config";

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skill-description">
        {Object.entries(SKILLS).map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
