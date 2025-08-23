import React from "react";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { useAnimationContext } from "../context/AnimationContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { CONTACT } from "../config";

const Navigation: React.FC = () => {
  const activeSection = useActiveSectionContext();
  const { triggerSkipAnimation } = useAnimationContext();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 798);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMobileMenu() {
    setIsVisible(!isVisible);
    const navElement = document.getElementById('nav');
    navElement?.classList.toggle('hidden', !isVisible);
  }

  const handleNavClick = () => {
    // Skip animation when navigating
    triggerSkipAnimation();
    
    if (isMobile) {
      toggleMobileMenu();
    }
  };

  const navItems = [
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#additional", label: "Additional", id: "additional" }
  ];

  return (
    <>
      {isMobile && (
        <button
          className="toggle-button" 
          onClick={toggleMobileMenu}
        >
          {isVisible ? 
            <GiHamburgerMenu className="hamburger-icon" /> :
            <FaChevronRight className="chevron-icon" />
          }
        </button>
      )}
      <nav className="navigation hidden" id="nav">
        <div>
          {navItems.map(({ href, label, id }) => (
            <a 
              key={id} 
              href={href}
              onClick={handleNavClick}
            >
              <div className={activeSection === id ? 'active' : ''}>
                {label}
              </div>
            </a>
          ))}
          {isMobile && (
            <>
              <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer">
                <div className="contact">Resume</div>
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="contact">LinkedIn</div>
              </a>
              <a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener noreferrer">
                <div className="contact">Email</div>
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
