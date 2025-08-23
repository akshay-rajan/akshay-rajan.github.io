import React from "react";
import Certificate from "./CertificateItem";
import { CERTIFICATIONS } from "../config";
import { PiCertificateFill } from "react-icons/pi";

const Certifications: React.FC = () => {
  return (
    <section className="certifications">
      <h2>CERTIFICATIONS</h2>
      {CERTIFICATIONS.map((certification, index) => (
        <div className="certificate-with-icon" key={index}>
          <PiCertificateFill className="certificate-icon" />
          <Certificate key={index} {...certification} />
        </div>
      ))}
    </section>
  );
};

export default Certifications;
