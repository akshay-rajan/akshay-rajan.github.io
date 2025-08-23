import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

import ContactItem from "./ContactItem";
import { CONTACT } from "../config";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-links">
        <ContactItem
          icon={<FaEnvelope />}
          text="Email"
          link={`mailto:${CONTACT.email}`}
        />
        <ContactItem
          icon={<FaLinkedin />}
          text="LinkedIn"
          link={CONTACT.linkedin}
        />
        <ContactItem
          icon={<FaGithub />}
          text="GitHub"
          link={CONTACT.github}
        />
        <ContactItem
          icon={<FaFileDownload />}
          text="Download Resume"
          link={CONTACT.resume}
        />
      </div>
    </section>
  );
}

export default Contact;
