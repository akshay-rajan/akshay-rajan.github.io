import React from "react";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";


const Navigation: React.FC = () => {
  const activeSection = useActiveSectionContext();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 798);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMobileMenu() {
    setIsVisible(!isVisible);
    const navElement = document.getElementById('nav');
    navElement?.classList.toggle('visible', !isVisible);
  }

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
      <nav className="navigation visible" id="nav">
        <div>
          {navItems.map(({ href, label, id }) => (
            <a 
              key={id} 
              href={href}
              onClick={toggleMobileMenu}
            >
              <div className={activeSection === id ? 'active' : ''}>
                {label}
              </div>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
