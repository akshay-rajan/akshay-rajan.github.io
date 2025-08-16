import React from "react";

const ContactItem: React.FC<{
    icon: React.ReactNode;
    text?: string;
    link?: string;
}> = ({ icon, text, link }) => {
  return (
    <div className="contact-item">
      {link ? (
          <a href={link} className="contact-link" target="_blank" rel="noopener noreferrer">
          {icon}
          {text}
        </a>
      ) : (
        <>
          {icon}
          <span>{text}</span>
        </>
      )}
    </div>
  );
}

export default ContactItem;
