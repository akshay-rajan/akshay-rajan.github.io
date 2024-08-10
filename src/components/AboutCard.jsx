import React from "react";

import CircleIcon from '@mui/icons-material/Circle';


export default function AboutCard(props) {
  const container = {
    font: `monospace`,
    fontSize: '15px',
    padding: '15px',
    paddingTop: '15px',
    marginLeft: '0',
    marginTop: '0',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'black',
    maxWidth: '100%',
    height: 'auto',
    aspectRatio: 'attr(width) / attr(height)',
    background: '#000',
    border: '0.1px solid rgb(100, 100, 100)',
    borderRadius: '10px',
  };
  const title = {
    font: `monospace`,
    color: 'wheat',
    fontSize: '15px',
    fontWeight: 'bold',
  };
  const desc = {
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
  };
  const points = {
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
  };
  const item = {
    display: 'inline',
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    margin: '2px',
    marginTop: '5px',
    opacity: '0.8',
  }
  const smallContainer = {
    font: `monospace`,
    fontSize: '15px',
    marginLeft: '0',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'black',
    maxWidth: '100%',
    height: 'auto',
    aspectRatio: 'attr(width) / attr(height)',
    background: '#000',
    border: '0.1px solid rgb(100, 100, 100)',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '0',
    marginBottom: '5px',
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div 
        style={props.isExpanded ? {display: 'none'} : (window.innerWidth < 798 ? smallContainer : container)} 
        onMouseEnter={() => {
          props.setExpanded(true);
          props.setHovering(props.title);
        }
      }>
        <div style={title}>{props.title}</div>
        <div style={desc}>
          {props.description}
        </div>
        <div style={points}>
          {props.points.map((point, index) => (
            <li style={item} key={index}>
              <CircleIcon style={{
                display: 'inline-flex', 
                width: '16px', 
                verticalAlign: 'middle', 
                boxSizing: 'inherit', 
                alignItems: 'center',
                color: getRandomColor(),
                opacity: '0.6',
              }}/>
              {point} 
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
