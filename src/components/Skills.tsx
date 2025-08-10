import React from "react";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import SkillCategory from "./SkillCategory";
import { SKILLS } from "../config";
import SkillMain from "./SkillMain";

const Skills: React.FC = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skill-description">
        <div className="skill-main">
          {SKILLS.main.map((item, index) => (
            <SkillMain
              key={index}
              title={item.title}
              logo={item.logo}
              description={item.description}
            />
          ))}
          <div className="view-more" onClick={toggleShowMore}>
            {showMore ? (
              <div className="less">Less <IoMdArrowDropup/></div>
            ) : (
              <div className="more">More <IoMdArrowDropdown/></div>
            )}
          </div>
        </div>
        {showMore && (
          <div className="skill-other">
            {Object.entries(SKILLS.other).map(([category, skills], index) => (
              <SkillCategory
                key={index}
                category={category}
                skills={skills}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
