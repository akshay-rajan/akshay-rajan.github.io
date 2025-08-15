import React from "react";
import { useScrollAnimation } from "../hooks/scrollAnimation";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Additional from "./Additional";
import Footer from "./Footer";

const AnimatedSection: React.FC<{ 
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Right: React.FC = () => {
  return (
    <main className="content">
      <div className="content-children">
        <AnimatedSection delay={0}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Education />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <Additional />
        </AnimatedSection>
        <AnimatedSection delay={500}>
          <Footer />
        </AnimatedSection>
      </div>
    </main>
  );
}

export default Right;