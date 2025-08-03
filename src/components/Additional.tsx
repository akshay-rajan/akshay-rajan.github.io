import React from "react";
import Certifications from "./Certifications";
import Achievements from "./Achievements";

const Additional: React.FC = () => {
  return (
    <section className="additional" id="additional">
      <div className="additional-description">
        <Certifications />
        <Achievements />
      </div>
    </section>
  );
}

export default Additional;
