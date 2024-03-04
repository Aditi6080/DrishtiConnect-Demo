// ParentComponent.js
import React, { useState } from "react";
import VolunteerRegister from "./VolunteerRegister";
import Certificate from "./Certificate";

const ParentComponent = () => {
  const [full_Name, setVolunteerFullName] = useState("");

  const handleVolunteerRegister = (full_Name) => {
    // Update state with the provided fullName
    setVolunteerFullName(full_Name);
  };

  return (
    <div>
      <VolunteerRegister onRegister={handleVolunteerRegister} />
      <Certificate full_Name={full_Name} />
    </div>
  );
};

export default ParentComponent;
