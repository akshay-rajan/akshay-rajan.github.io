import React from "react";
import { useActiveSectionContext } from "../context/ActiveSectionContext";

const Navigation: React.FC = () => {
  const activeSection = useActiveSectionContext();

  const navItems = [
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#additional", label: "Additional", id: "additional" }
  ];

  return (
    <nav className="navigation">
      {navItems.map(({ href, label, id }) => (
        <a key={id} href={href}>
          <div className={activeSection === id ? 'active' : ''}>
            {label}
          </div>
        </a>
      ))}
    </nav>
  );
}

export default Navigation;