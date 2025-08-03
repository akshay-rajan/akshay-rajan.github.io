import React from "react";
import Certifications from "./Certifications";
import Achievements from "./Achievements";

const Additional: React.FC = () => {
  return (
    <div className="additional">
      <h2>ADDITIONAL</h2>
      <div className="additional-description">
        <Certifications />
        <Achievements />
      </div>
    </div>
  );
}

export default Additional;
