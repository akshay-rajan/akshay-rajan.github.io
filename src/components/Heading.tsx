import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "./Contact";
import { ADDRESS, NAME, TITLE } from "../config";

const Heading: React.FC = () => {
  return (
    <header className="header">
      <h1>{NAME}</h1>
      <p>{TITLE}</p>
      <p>
        <FaMapMarkerAlt /> {ADDRESS}
      </p>
      <Contact />
    </header>
  );
}

export default Heading;
