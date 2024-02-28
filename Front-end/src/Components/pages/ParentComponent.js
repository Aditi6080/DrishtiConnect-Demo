// ParentComponent.js
import React, { useState } from "react";
import VolunteerRegister from "./VolunteerRegister";
import Certificate from "./Certificate";

const ParentComponent = () => {
  const [volunteerFullName, setVolunteerFullName] = useState("");

  const handleVolunteerRegister = (fullName) => {
    // Update state with the provided fullName
    setVolunteerFullName(fullName);
  };

  return (
    <div>
      <VolunteerRegister onRegister={handleVolunteerRegister} />
      <Certificate FULL={volunteerFullName} />
    </div>
  );
};

export default ParentComponent;
