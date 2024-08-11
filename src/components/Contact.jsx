import React from 'react';

import "../styles/Contact.css";

import ContactForm from './ContactForm';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactLinks from './ContactLinks';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {

  return (
    <div className="contact" id="contact">
      
      <ContactLinks />

      <div className="contact-container">
        
        <div className="contact-title">Contact Me</div>

        <div className="contact-row">
          <div className="contact-col-1"></div>
          <div className="contact-col-2"></div>
          <address className="contact-info">
            <div>
              <a href="https://www.linkedin.com/in/iamakshayrajan/">
                <LinkedInIcon />
              </a>
            </div>
            <div>
              <a href="mailto:akshayrajan345@gmail.com">
                <EmailIcon />
              </a>
            </div>
            <div>
              <a href="https://www.google.com/maps/place/Thiruvananthapuram,+Kerala/">
                <LocationOnIcon />
              </a>
            </div>
            {window.innerWidth < 798 && 
              <>
                <div>
                  <a href="https://github.com/akshay-rajan" >
                    <GitHubIcon />
                  </a>
                </div>
                <div>
                  <a href="https://leetcode.com/u/akshayrajan/" >
                    <CodeIcon />
                  </a>
                </div>
              </>
            }
          </address>
        </div>
        
        <ContactForm />
        
        </div>

      </div>
    );
  };

export default Contact;
