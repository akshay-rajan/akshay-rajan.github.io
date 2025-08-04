import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificate: React.FC<{
  title: string;
  extra?: string;
  link: string;
}> = ({ title, extra, link }) => {
  return (
    <div className="certificate-item">
      <a href={link} className="certificate-link" target="_blank" rel="noopener noreferrer">
        <span className="title" dangerouslySetInnerHTML={{ __html: title }} />
        {extra && <span className="extra" dangerouslySetInnerHTML={{ __html: extra }} />}
        <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default Certificate;
