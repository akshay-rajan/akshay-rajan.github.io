import React from "react";
import Certifications from "./Certifications";
import Achievements from "./Achievements";

const Additional: React.FC = () => {
  return (
    <div className="additional">
      <h2>Additional</h2>
      <Certifications />
      <Achievements />
    </div>
  );
}

export default Additional;
