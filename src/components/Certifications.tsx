import React from "react";
import Certificate from "./CertificateItem";
import { CERTIFICATIONS } from "../config";

const Certifications: React.FC = () => {
  return (
    <section className="certifications">
      <h3>Certifications</h3>
      <ul>
        {CERTIFICATIONS.map((certification, index) => (
          <Certificate key={index} {...certification} />
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
