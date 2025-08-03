import React from "react";
import { BUILT_AT } from "../config";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Designed in <em>Figma</em> and developed using <em>React</em> and <em>Sass</em>. Deployed to <em>Github Pages</em>. </p>
      <p style={{ fontStyle: "italic", textAlign: "center" }}>Last Updated: {new Date(BUILT_AT).toLocaleDateString()}</p>
    </footer>
  );
}

export default Footer;
