import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Drishti</span>Connect
              </h3>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-2 connectus">
              <h5>Connect us on</h5>

              <div className="footer-icons">
                <p>
                  <a href="https://www.instagram.com/accounts/login/?hl=en">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/login/">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="https://twitter.com/i/flow/login">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/home">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 ft-3 contactInfo">
              <h5>Contact Information</h5>
              <p>
                <i class="fa-solid fa-envelope"></i>{" "}
                <a
                  href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S84059283%3A1707847734369375&theme=glif"
                  class="linkColor"
                >
                  rhutujam@gmail.com
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +91 9075575845
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      <div className="Last-footer bg-primary">
        <p>
          @{new Date().getFullYear()}{" "}
          <a class="text-body" href="https://mdbootstrap.com/">
            DrishtiConnect.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
