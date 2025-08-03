import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificate: React.FC<{
  title: string;
  link: string;
}> = ({ title, link }) => {
  return (
    <li className="certificate-item">
      <a href={link} className="certificate-link" target="_blank" rel="noopener noreferrer">
        {title} <FaExternalLinkAlt />
      </a>
    </li>
  );
};

export default Certificate;
