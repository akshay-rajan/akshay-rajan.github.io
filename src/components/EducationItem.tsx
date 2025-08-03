import React from 'react';
    

const EducationItem: React.FC<{ 
    degree: string; 
    institution: string; 
    year: string 
    grade?: string
}> = ({ degree, institution, year, grade }) => {
  return (
    <div className="education-item">
      <div className="left">
        <div>{year}</div>
      </div>
      <div className="right">
        <strong>{institution}</strong>
        <div>{degree}</div>
        {grade && <div className="grade">{grade}</div>}
      </div>
    </div>
  );
}

export default EducationItem;
