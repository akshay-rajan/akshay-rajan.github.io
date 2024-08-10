import React from "react";
import { useState } from "react";
import dp from "../assets/dp_cartoon.jpeg";
import { Tooltip } from "@nextui-org/tooltip";

export default function AboutProfile() {
  const flexLeft = {
    container: {
      display: 'block',
      padding: '2rem',
      flex: 1,
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '1.5rem 0 0 1.5rem',
    },
    imgContainer: {
      textAlign: 'left',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '50%',
    },
    dp: {
      textAlign: 'center',
      borderRadius: '50%',
      border: '1px solid wheat',
      width: '300px',
      margin: '0',
      padding: '0',
      height: 'auto',
    },
    details: {
      display: 'block',
      textAlign: 'left',
      maxWidth: '100%',
      height: 'auto',
      color: 'white',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '0 1.5rem 1.5rem 0',
    },
    greyFont: {
      color: 'grey',
      fontSize: '1rem',
      margin: '0px',
    },
    name: {
      color: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
    },
    desc: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1rem',
      marginTop: '5px',
    },
    buttonDiv: {
      textAlign: 'left',
      width: '100%',
      marginTop: '1rem',
      height: 'auto',
    },
    mainButton: {
      width: '100%',
      fontSize: '15px',
      color: '#b1aeae',
      fontWeight: 'normal',
      borderRadius: '0.5rem',
      margin: '0.5rem 0',
    },
    extras: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1rem',
      marginTop: '1rem',
    },
    url: {
      color: 'wheat',
      textDecoration: 'none',
      fontSize: '14px',
    },
    urlHover: {
      color: 'wheat',
      textDecoration: 'underline',
      fontSize: '14px',
    },
  }

  const smallScreen = {
    ...flexLeft,
    dp: {
      width: '100px',
      borderRadius: '50%',
      border: '1px solid wheat',
    },
    imgContainer: {
      margin: 0,
    },
    container: {
      ...flexLeft.container,
      display: 'flex',
      margin: '2px',
      padding: '10px',
      borderRadius: '1.5rem 1.5rem 0 0',
    },
    details: {
      ...flexLeft.details,
      padding: '1rem',
      paddingTop: '0',
      paddingBottom: '2px',
      borderRadius: '1.5rem 1.5rem 1.5rem 1.5rem',
    },
    buttonDiv: {
      ...flexLeft.buttonDiv,
      margin: '0',
    },
    extras: {
      ...flexLeft.extras,
      margin: '0',
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div style={window.innerWidth < 798 ? smallScreen.container : flexLeft.container}>
        <div style={window.innerWidth < 798 ? smallScreen.imgContainer : flexLeft.imgContainer}>
          <Tooltip content="👽️" showArrow={true} placement="right-end" color="foreground" offset={-100} >
            <img src={dp} style={window.innerWidth < 798 ? smallScreen.dp : flexLeft.dp} alt="display picture" />
          </Tooltip>
        </div>
        <div>
          <div style={window.innerWidth < 798 ? smallScreen.details : flexLeft.details}>
            <div style={flexLeft.name}>Akshay R</div>
            <h3 style={flexLeft.greyFont}>akshay-rajan</h3>
          </div>
          <div style={window.innerWidth < 798 ? smallScreen.details : flexLeft.desc}>
            Software Developer | MCA 25' @ College of Engineering, Trivandrum
            <div style={window.innerWidth ? smallScreen.buttonDiv : flexLeft.buttonDiv}>
              <a href="https://github.com/akshay-rajan">
                <button style={flexLeft.mainButton}>Github</button>
              </a>
            </div>
            <div style={window.innerHeight ? smallScreen.extras : flexLeft.extras}>
              <a 
                href="https://akshay-rajan.github.io/" 
                style={isHovered ? flexLeft.urlHover : flexLeft.url} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
              >
                akshay-rajan.github.io/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
