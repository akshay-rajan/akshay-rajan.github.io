import React from "react";
import { ACHIEVEMENTS } from "../config";
import { FaExternalLinkAlt } from "react-icons/fa";

const Achievements: React.FC = () => {
  return (
    <section className="achievements">
      <h2>ACHIEVEMENTS</h2>
      <ul>
        {ACHIEVEMENTS.map((achievement, index) => (
          <li key={index} className="achievement-item">
            {achievement.link ? (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                {achievement.description} <FaExternalLinkAlt />
              </a>
            ) : (
              <span>{achievement.description}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
