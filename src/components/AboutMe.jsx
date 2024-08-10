import React from "react";

export default function AboutMe({ isExpanded }) {
  const content = {
    container: {
      font: `monospace`,
      fontSize: '15px',
      color: 'white',
      padding: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      textAlign: 'left',
      display: 'block',
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      border: '0.1px solid rgb(100, 100, 100)',
      borderRadius: '10px',
    },
    heading: {
      font: `monospace`,
      fontSize: '25px',
      fontWeight: 'bold',
    },
    }

  return (
    <>
      <div style={isExpanded ? {display: "none"} : content.container}>
        <div style={content.heading}>
          About Me
        </div>
        <div>
          <br />
          I graduated with a degree in Mathematics, from University College Trivandrum. After realizing that programming is where my passion lies, I decided to pursue MCA and I'm currently a final year student at the College of Engineering, Trivandrum. <br/><br/>

          I have acquired skills in Web Development using Django and I'm currently expanding my knowledge in various areas including Blockchain, Linux, Cybersecurity, AI and Machine Learning. Solving problems on LeetCode is one of my favorite ways to sharpen my analytical and coding skills.
        </div>
      </div>
    </>
  );
};
