import React from "react";
import Certificate from "./CertificateItem";
import { CERTIFICATIONS } from "../config";

const Certifications: React.FC = () => {
  return (
    <section className="certifications">
      <h2>CERTIFICATIONS</h2>
      <ul>
        {CERTIFICATIONS.map((certification, index) => (
          <Certificate key={index} {...certification} />
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
