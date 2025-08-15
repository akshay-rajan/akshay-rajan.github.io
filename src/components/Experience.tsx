import React from "react";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../config";

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <h2>EXPERIENCE</h2>
      <div className="experience-list">
        {EXPERIENCE.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            company={item.company}
            year={item.year}
            description={item.description}
            role={item.role}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
