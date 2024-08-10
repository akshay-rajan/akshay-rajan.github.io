import React, { useState, useRef, useEffect } from "react";

import AboutCard from "./AboutCard";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Certifications from "./Certifications";


export default function AboutCards({ isExpanded, setExpanded }) {

  const education = {
    title: "Education",
    description: "Colleges, Schools, and Degrees",
    points: ["College of Engineering, Trivandrum", "University College, TVM", "St. Joseph's HSS..."],
    content: [
      {
        "ongoing": true,
        "degree": "Masters in Computer Applications",
        "school": "College of Engineering, Trivandrum",
        "year": "2023 - Present",
        "marks": "CGPA: 9.36",
      },
      {
        "ongoing": false,
        "degree": "Bachelor of Science in Mathematics",
        "school": "University College, Trivandrum",
        "year": "2020 - 2023",
        "marks": "CGPA: 9.63 (Core)",
      },
      {
        "ongoing": false,
        "degree": "Higher Secondary",
        "school": "St. Joseph's Higher Secondary School",
        "year": "2018 - 2020",
        "marks": "Percentage: 94%",
      },
    ],
  };

  const skills = {
    title: "Skills",
    description: "Products of consistent learning and practice",
    points: ["Django", "React", "Python", "Java", "C..."],
    content: [],
  };

  // const experience = {
  //   title: "Experience",
  //   description: "This is the description for experience",
  //   points: ["Solana", "Internet Computer", "Rust", "TypeScript..."],
  //   content: [
  //     {
  //       "job": "Software Developer Intern",
  //       "company": "XTG Technologies",
  //       "year": "May 2024 - Present",
  //       "desc": "Developed a full-stack web application for managing employee data using React, Node.js, and MongoDB.",
  //     },
  //   ],
  // };

  const certifications = {
    title: "Certifications",
    description: "Proofs of sacrifices and dedication",
    points: ["Harvard", "Google", "IIT Madras", "ACM..."],
  };

  const achievements = {
    title: "Achievements",
    description: "Seeds of motivation and inspiration",
    points: ["College Topper", "IIT JAM", "Kerala MCA Entrance..."],
    content: [
      {
        "achievement": "College Topper",
        "year": "2023",
        "additional": "University College, Trivandrum",
      },
      {
        "achievement": "AIR 1778",
        "year": "2023",
        "additional": "IIT JAM ",
      },
      {
        "achievement": "Rank 20",
        "year": "2023",
        "additional": "Kerala MCA Entrance",
      },
    ],
  };

  const container = {
    overflow: 'hidden',
  }
  const expanded = {
    display: 'block',
    position: 'relative',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
  };
  const cards = { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gridGap: '20px' 
  };

  const smallWidth = {
    cards: {
      ...cards,
      display: 'block',
    },
    expanded: {
      ...expanded,
    }
  };

  const [hovering, setHovering] = useState("none");

  const topElement = useRef(null);

  useEffect(() => {
    if (topElement.current && isExpanded) {
      topElement.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, []);

  return (
    <div ref={topElement} style={container}>
      <div 
        className="expandedDiv"
        style={isExpanded ? (window.innerWidth < 798 ? smallWidth.expanded : expanded) : {display: 'none'}}
        onMouseLeave={() => setExpanded(false)
      }>
        {hovering == "Education" && <Education {...education} setExpanded={setExpanded} />}
        {hovering == "Skills" && <Skills {...Skills} setExpanded={setExpanded} />}
        {hovering == "Achievements" && <Achievements {...achievements} setExpanded={setExpanded} />}
        {hovering == "Certifications" && <Certifications setExpanded={setExpanded} />}
      </div>

      <div style={window.innerWidth < 798 ? smallWidth.cards : cards } className="more-details">

        <AboutCard {...education} isExpanded={isExpanded} setExpanded={setExpanded} setHovering={setHovering} />
        <AboutCard {...skills}  isExpanded={isExpanded} setExpanded={setExpanded} setHovering={setHovering} />
        <AboutCard {...certifications} isExpanded={isExpanded} setExpanded={setExpanded} setHovering={setHovering} />
        <AboutCard {...achievements} isExpanded={isExpanded} setExpanded={setExpanded} setHovering={setHovering} />

      </div>
    </div>
  );
};
