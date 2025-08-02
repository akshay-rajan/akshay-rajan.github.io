import React from "react";
import { ACHIEVEMENTS } from "../config";

const Achievements: React.FC = () => {
  return (
    <section className="achievements">
      <h3>Achievements</h3>
      <ul>
        {ACHIEVEMENTS.map((achievement, index) => (
          <li key={index} className="achievement-item">
            {achievement.link ? (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                {achievement.description}
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
