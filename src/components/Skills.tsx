import React from "react";
import SkillCategory from "./SkillCategory";
import { SKILLS } from "../config";

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      {Object.entries(SKILLS).map(([category, skills]) => (
        <SkillCategory key={category} category={category} skills={skills} />
      ))}
    </section>
  );
};

export default Skills;
