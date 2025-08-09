import React from "react";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Additional from "./Additional";
import Footer from "./Footer";

const Right: React.FC = () => {
  return (
    <main className="content">
      <div className="content-children">
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Additional />
        <Footer />
      </div>
    </main>
  );
}
  
export default Right;
