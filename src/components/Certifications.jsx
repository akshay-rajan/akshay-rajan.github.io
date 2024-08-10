import React from "react";
import Certificate from "./Certificate";
import CloseIcon from '@mui/icons-material/Close';

import cs50 from "../assets/cs50x.png";
import ml from "../assets/acm_ml.png";
import cs50w from "../assets/cs50w.png";
import cyber from "../assets/google_cyber.png";
import python from "../assets/nptel_python.png";


export default function Certifications(props) {
  const container = {
    display: 'block',
    font: "`Times New Roman`, `serif`",
    position: 'relative',
    width: '100%',
    margin: '10px',
    padding: '10px',
  };
  const title = {
    display: 'flex',
    color: 'white',
    fontSize: '30px',
    textAlign: 'left',
    fontWeight: 'bold',
  };
  const certificates = window.innerWidth < 798 ? {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '4px',
    padding: '0',
    paddingTop: '10px',

  } : {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    padding: '0',
  };
  const closeButton = {
    position: 'absolute',
    top: '20',
    left: '90%',
    color: 'white',
    cursor: 'pointer',
  };
  
  const certifications = {
    title: "Certifications",
    description: "Proofs of sacrifices and dedication",
    points: ["Harvard", "Google", "IIT Madras", "ACM..."],
    content: [
      {
        "certification": "CS50W: Web Programming with Python and JavaScript",
        "year": "2024",
        "institution": "Harvard University",
        "image": cs50w,
      },
      {
        "certification": "Google Cybersecurity Professional",
        "year": "2024",
        "institution": "Coursera",
        "image": cyber,
      },
      {
        "certification": "Machine Learning using Python",
        "year": "2024",
        "institution": "Association of Computing Machinery",
        "image": ml,
      },
      {
        "certification": "CS50: Introduction to Computer Science",
        "year": "2023",
        "institution": "Harvard University",
        "image": cs50,
      },
      {
        "certification": "Programming, Data Structures and Algorithms using Python",
        "year": "2024",
        "institution": "IIT Madras (NPTEL)",
        "image": python,
      },
    ],
  };
  
  return (
    <>
      <div style={container}>
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>
          <div>Certifications</div>
          <div className="close-btn"><CloseIcon /></div>
        </div>
          <div style={certificates} classname="certificates-div">
            {certifications.content.map((certification, index) => 
              <Certificate key={index} index={index} certification={certification} />
            )}
          </div>
      </div>
    </>
  );
};
