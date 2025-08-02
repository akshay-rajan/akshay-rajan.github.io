import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import ContactItem from "./ContactItem";
import LeetCode from "./icons/LeetCode";
import { CONTACT } from "../config";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-links">
        <ContactItem
          icon={<FaEnvelope />}
          link={`mailto:${CONTACT.email}`}
        />
        <ContactItem
          icon={<FaLinkedin />}
          link={CONTACT.linkedin}
        />
        <ContactItem
          icon={<FaGithub />}
          link={CONTACT.github}
        />
        {
          CONTACT.leetcode && (
            <ContactItem
              icon={<LeetCode />}
              link={CONTACT.leetcode}
            />
          )
        }
      </div>
    </section>
  );
}

export default Contact;
