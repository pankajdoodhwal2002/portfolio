import React from "react";
import "../Css/Button.css";
import resume from "../data/PankajDoodhwal_ArmyInstituteOfTechnology_BTSA_CV.pdf";

const Button = () => {
  return (
    <div className="resumebutton1">
      <a href={resume} download="resume">
        Download Resume
      </a>
    </div>
  );
};

export default Button;
