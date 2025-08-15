import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/scrollAnimation";
import { setItemWithTTL, getItemWithTTL } from "../utils/localStorage";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Additional from "./Additional";
import Footer from "./Footer";

const ANIMATION_SEEN_KEY = 'fade-in-animation';
const TTL = 60 * 1000; // 1 minute


const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
  skipAnimation: boolean;
}> = ({ children, delay = 0, skipAnimation }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${skipAnimation ? '' : 'scroll-animate'} ${(isVisible || skipAnimation) ? 'fade-in' : ''}`}
      style={{
        animationDelay: skipAnimation ? '0ms' : `${delay}ms`,
        opacity: skipAnimation ? 1 : undefined,
        transform: skipAnimation ? 'translateY(0)' : undefined
      }}
    >
      {children}
    </div>
  );
};


const Right: React.FC = () => {
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    // Check if animation has been seen before
    const hasSeenAnimation = getItemWithTTL(ANIMATION_SEEN_KEY);
    console.log(`Has seen animation: ${hasSeenAnimation}`);

    if (hasSeenAnimation) {
      setSkipAnimation(true);
    } else {
      // Mark animation as seen
      setItemWithTTL(ANIMATION_SEEN_KEY, 'true', TTL);
      setSkipAnimation(false);
    }
  }, []);

  const sections = [
    { component: Experience, delay: 0 },
    { component: Education, delay: 100 },
    { component: Skills, delay: 200 },
    { component: Projects, delay: 300 },
    { component: Additional, delay: 400 },
    { component: Footer, delay: 500 }
  ];

  return (
    <main className="content">
      <div className="content-children">
        {sections.map(({ component: Component, delay }) => (
          <AnimatedSection key={delay} delay={delay} skipAnimation={skipAnimation}>
            <Component />
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
}

export default Right;
