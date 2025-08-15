import React from "react";
import { BUILT_AT } from "../config";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Designed in <em>Figma</em> and developed using <em>React</em> and <em>Sass</em>. Deployed to <em>Github Pages</em>. </p>
      <p className="last-updated">Last Updated: {BUILT_AT}</p>
    </footer>
  );
}

export default Footer;
