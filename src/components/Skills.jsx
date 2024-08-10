import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import "../styles/Skills.css";

import Pie from "./Pie";

export default function Skills(props) {
  const title = {
    display: 'flex',
    font: `monospace`,
    color: 'white',
    fontSize: '30px',
    textAlign: 'left',
    fontWeight: 'bold',
  };
  const skillData = {
    display: 'flex',
    textAlign: 'left',
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    opacity: '0.8',
    padding: '1rem',
    border: '0.1px solid rgb(100, 100, 100)',
    height: 'auto',
    borderRadius: '10px',
    overflow: 'visible', 
    zIndex: '-1',
  };
  const skillsList = {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '0px',
    padding: '0',
    margin: '0',
  };
  const skillStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    width: 'auto',
  };

  const small = {
    skillData: {
      display: 'block',
      textAlign: 'center',
      font: `monospace`,
      color: 'white',
      fontSize: '15px',
      margin: '15px 35px 0 0',
      opacity: '0.8',
      padding: '1rem',
      border: '0.1px solid rgb(100, 100, 100)',
      height: 'auto',
      borderRadius: '10px',
    },
  }
  
  const [info, setInfo] = useState([]);

  return (
    <>
      <div className="skill-container">
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>
          <div>Skills</div>
          <div className="close-btn"><CloseIcon /></div>
        </div>
        <div style={window.innerWidth < 798 ? small.skillData : skillData}>

          <Pie setInfo={setInfo}></Pie>

          <div className="pie-info">
            <div style={skillsList}>
              {info.map((item, index) => (
                <div style={skillStyle} key={index}>
                  
                  {item.logo && <img src={item.logo} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />}
                  {item.name}
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
