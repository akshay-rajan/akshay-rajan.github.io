import React from "react";
import { ACHIEVEMENTS } from "../config";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

const Achievements: React.FC = () => {
  return (
    <section className="achievements">
      <h2>ACHIEVEMENTS</h2>
      <div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <FaCrown className="achievement-icon" />
            {achievement.link ? (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-content">
                <div>
                  <span dangerouslySetInnerHTML={{ __html: achievement.description }} />
                  <FaExternalLinkAlt />
                </div>
              </a>
            ) : (
              <div className="achievement-content">
                <span dangerouslySetInnerHTML={{ __html: achievement.description }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
