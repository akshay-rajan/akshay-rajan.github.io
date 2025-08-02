import React from "react";
import EducationItem from "./EducationItem";
import { EDUCATION } from "../config";

const Education: React.FC = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {EDUCATION.map((item, index) => (
          <EducationItem
            key={index}
            degree={item.degree}
            institution={item.institution}
            year={item.year}
            grade={item.grade}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
