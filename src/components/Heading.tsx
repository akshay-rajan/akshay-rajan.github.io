import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "./Contact";
import { ADDRESS, NAME, TITLE } from "../config";

const Heading: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="my-name">{NAME}</h1>
        <div className="my-title">{TITLE}</div>
        <div className="my-location">
          <FaMapMarkerAlt /> {ADDRESS}
        </div>
        <Contact />
      </div>
    </header>
  );
}

export default Heading;
