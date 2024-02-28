import React from "react";
//import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/Home.css";
import { Link, useNavigate } from "react-router-dom";
// function Volunteers() {
//   const navigate = useNavigate();

//   // This will navigate immediately when the component is mounted
//   // If you want to navigate on a button click, you should move this to a button click event.
//   navigate("/Volunteers");

//   return (
//     <div>
//       <h2>Volunteers Component</h2>
//     </div>
//   );
// }

function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
  
    window.location.href = "http://localhost:8080/index.html";
  };
   function changeBtn (){
    navigate("/volunterLogin");
  }
  return (
    <>
      <section id="header" className="main">
        <div className="content">
          <h1>Let's see the world together</h1>
          <h4>
            DrishtiConnect helps people needing sighted support with volunteers
            through live video call.
          </h4>

          <Link to="/Volunteers" >
            <Button variant="primary" onClick={handleButtonClick}>Call us</Button>
          </Link>

          
            <Button variant="primary" onClick={changeBtn}>
                I'd like to volunteer
            </Button>
          
          
        </div>
      </section>
    </>
  );
}

export default Home;
