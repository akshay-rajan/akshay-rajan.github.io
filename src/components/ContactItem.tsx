import React from "react";
import { Tooltip } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContactItem: React.FC<{
    icon: React.ReactNode;
    text?: string;
    link?: string;
}> = ({ icon, text, link }) => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <div className="contact-item">
        <Tooltip 
          disableHoverListener={isSmallScreen}
          className="contact-tooltip"
          title={text} 
          arrow 
          placement="top"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#000",
                color: "#fff",
              },
            },
            arrow: {
              sx: {
                color: "#000",
              },
            },
          }}
        >
        {link ? (
          <a href={link} className="contact-link" target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        ) : (
          <>{icon}</>
        )}
        </Tooltip>
      </div>
);
}

export default ContactItem;
