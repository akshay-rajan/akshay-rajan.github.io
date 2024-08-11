import React, { useState } from 'react';

import "../styles/Hamburger.css";

export default function Hamburger({ isOpen, toggle }) {

  return (
    <div id="nav-icon2" className={isOpen ? 'open' : ''} onClick={toggle}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
