// import React from "react";

// const VolunteerProfile = () => {
//   return <div>VolunteerProfile</div>;
// };

// export default VolunteerProfile;

import React from "react";
// import "../css/VolunteerProfile.css";
import avatar from "../images/avatar.jpg";
import { Link } from "react-router-dom";
const VolunteerProfile = () => {
  const user = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
  };

  return (
    <>
      <div className="profile-page">
        <div className="user-info">
          <img src={avatar} alt="User Avatar" />
          <h2>{user.name}</h2>
          <p className="p-first">
            Your membership in the DrishtiConnect family is appreciated.
          </p>
          <p className="p-second">
            As a valued member, we invite you to access your certificate by
            clicking the download button.
          </p>
        </div>
        <div className="middle-button">
          <Link to="/certificate">
            <button class="btn btn-primary ">Generate</button>
          </Link>
          <button class="btn btn-primary ">Logout</button>
        </div>
      </div>
    </>
  );
};

export default VolunteerProfile;