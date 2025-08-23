import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "./Contact";
import { ADDRESS, NAME, TITLE } from "../config";
import Navigation from "./Navigation";

const Left: React.FC = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="first">
          <h1 className="my-name">{NAME}</h1>
          <div className="my-title">{TITLE}</div>
          <div className="my-location">
            <FaMapMarkerAlt /> {ADDRESS}
          </div>
        </div>
        <div className="second"><Navigation /></div>
        <div className="third"><Contact /></div>
      </div>
    </div>
  );
}

export default Left;
