import React, { useState } from 'react';

import "../styles/Hamburger.css";

export default function Hamburger() {
    const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div id="nav-icon2" className={open ? 'open' : ''} onClick={toggleOpen}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
