import react from "react";


export default function SvgComponent2(props) {
  
  const svgStyle = {
    stroke: (props.currentEdu == 1 || props.currentEdu == 2) ? "#4493f8" : "grey",
    strokeWidth: "4px",
    fill: "transparent",
  };
  
  if (window.innerWidth < 798)  {
    return (
      <>
        <svg height="100" width="300" xmlns="http://www.w3.org/2000/svg">
          <line x1="150" y1="0" x2="150" y2="200" style={svgStyle} />
        </svg>
      </>
    )
  };


  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" >
        <path d="M0,50 C100,50 100,162 150,0" style={svgStyle} />
      </svg>
    </>
  );
}
