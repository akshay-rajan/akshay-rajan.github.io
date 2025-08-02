import React from 'react';
    

const EducationItem: React.FC<{ 
    degree: string; 
    institution: string; 
    year: string 
    grade?: string
}> = ({ degree, institution, year, grade }) => {
  return (
    <div className="education-item">
      <strong>{degree}</strong>
      <div>{institution}</div>
      <div>{year}</div>
      {grade && <div>{grade}</div>}
    </div>
  );
}

export default EducationItem;
