import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/scrollAnimation";
import { setItemWithTTL, getItemWithTTL } from "../utils/localStorage";
import { useAnimationContext } from "../context/AnimationContext";

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
  const [skipAnimationFromStorage, setSkipAnimationFromStorage] = useState(false);
  const { skipAnimation: skipAnimationFromContext } = useAnimationContext();

  useEffect(() => {
    // Check if animation has been seen before
    const hasSeenAnimation = getItemWithTTL(ANIMATION_SEEN_KEY);

    if (hasSeenAnimation) {
      setSkipAnimationFromStorage(true);
    } else {
      // Mark animation as seen
      setItemWithTTL(ANIMATION_SEEN_KEY, 'true', TTL);
      setSkipAnimationFromStorage(false);
    }
  }, []);

  // Combine both skip conditions
  const shouldSkipAnimation = skipAnimationFromStorage || skipAnimationFromContext;

  
  const sections = [
    { component: Experience, delay: 0, id: 'experience' },
    { component: Education, delay: 100, id: 'education' },
    { component: Skills, delay: 200, id: 'skills' },
    { component: Projects, delay: 300, id: 'projects' },
    { component: Additional, delay: 400, id: 'additional' },
    { component: Footer, delay: 500, id: 'footer' }
  ];

  return (
    <main className="content">
      <div className="content-children">
        {sections.map(({ component: Component, delay, id }) => (
          <AnimatedSection 
            key={id} 
            delay={delay} 
            skipAnimation={shouldSkipAnimation}
          >
            <Component />
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
}

export default Right;
