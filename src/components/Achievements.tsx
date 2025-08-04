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
                <span dangerouslySetInnerHTML={{ __html: achievement.description }} />
                <FaExternalLinkAlt />
              </a>
            ) : (
                <>
                  <span dangerouslySetInnerHTML={{ __html: achievement.description }} />
                </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
