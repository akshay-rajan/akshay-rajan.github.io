import React from "react";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../config";

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {EXPERIENCE.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            company={item.company}
            year={item.year}
            description={item.description}
            role={item.role}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
