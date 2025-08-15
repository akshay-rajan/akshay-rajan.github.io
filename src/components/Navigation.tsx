import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <a href="#experience"><div >
        Experience
      </div></a>
      <a href="#education"><div>
        Education
      </div></a>
      <a href="#skills"><div>
        Skills
      </div></a>
      <a href="#projects"><div>
        Projects
      </div></a>
      <a href="#additional"><div>
        Additional
      </div></a>
    </nav>
  );
}

export default Navigation;
