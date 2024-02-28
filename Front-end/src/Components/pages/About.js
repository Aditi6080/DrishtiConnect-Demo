import React from "react";

import data from "../../shared/constant/constantData";
import "../css/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="main-div">
      <div class="container-div">
        <div className="row-div">
          <div className="flex-div">
            <h2> About us</h2>
            <h3>
              We hope that " DrishtiConnect " will light up lives of blind
              people
            </h3>
            <p>
              Our mission is to make the world more accessible for people who
              are blind or have low vision.This platform will help blind or low
              vision individuals navigate with the assistance of volunteers.
              Volunteers will assist people through video calls.
            </p>
            <Link to="/">
              <button type="button" class="btn btn-dark">
                Learn more
              </button>
            </Link>
          </div>

          <div className="flex-div">
            <img src={data.img4} alt="img4" class="imgSize" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
