import React from "react";
import "../css/Certificate.css";
import { exportComponentAsPNG } from "react-component-export-image";
const Certificate = ({ value }) => {
  const certificateWrapper = React.createRef("");
  return (
    <div className="App">
      <div className="meta">
        <h1>Certificate of Appreciation</h1>

        <div id="dowmloadWrapper" ref={certificateWrapper}>
          <div id="certificateWrapper">
            <p>{value}</p>
            <img
              className="image-size"
              src="https://i.imgur.com/1bRQvJz.png"
              alt="imageforcertificate"
            ></img>
          </div>
        </div>
        <button
          className="btn btn-dark"
          onClick={(e) => {
            e.preventDefault();
            exportComponentAsPNG(certificateWrapper, {
              html2CanvasOptions: { backgroundColor: null },
            });
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Certificate;
