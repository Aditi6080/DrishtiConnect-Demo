import React from "react";
import "../css/Contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-wrapper">
            <div className="contact-form">
              <h3>Send us a message </h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" />
                </div>
                <Link to="feedback">
                  <button type="button" class="btn btn-primary">
                    Send Message
                  </button>
                </Link>
              </form>
            </div>

            <div className="contact-info">
              <h3>Connect with us:</h3>
              <p class="mail-container">
              Email:{" "}
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S84059283%3A1707847734369375&theme=glif">
                  aditigupta6080@gmail.com
                </a>
              </p>
              <p class="mail-container">
              Email:{" "}
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S84059283%3A1707847734369375&theme=glif">
                  netranjali@gmail.com
                </a>
              </p>
              <p class="mail-container">
              Email:{" "}
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S84059283%3A1707847734369375&theme=glif">
                  shivansh@gmail.com
                </a>
              </p>
              <p class="mail-container">
              Email:{" "}
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S84059283%3A1707847734369375&theme=glif">
                  rhutuja@gmail.com
                </a>
              </p>
              <p class="mail-container">Phone : +91 9075575845</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
