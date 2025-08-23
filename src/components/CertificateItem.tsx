import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Certificate: React.FC<{
  title: string;
  extra?: string;
  link: string;
}> = ({ title, extra, link }) => {
  return (
    <li className="certificate-item">
      <a href={link} className="certificate-link" target="_blank" rel="noopener noreferrer">
        <span className="title" dangerouslySetInnerHTML={{ __html: title }} />
        {extra && <span className="extra" dangerouslySetInnerHTML={{ __html: extra }} />}
        <MdArrowOutward className="link-icon" />
      </a>
    </li>
  );
};

export default Certificate;
