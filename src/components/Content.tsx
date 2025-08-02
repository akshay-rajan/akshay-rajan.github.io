import React from "react";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Additional from "./Additional";

const Content: React.FC = () => {
  return (
    <main className="content">
      <div className="content-children">
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Additional />
      </div>
    </main>
  );
}

export default Content;
