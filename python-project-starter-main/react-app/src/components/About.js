import React from "react";
import "./../styles/about.css";
import "./../styles/splash-page.css";

function About() {
  return (
    <div className="splash-page-container">
      <div className="splash-photo-container splash-photo-container-about">
        <h2 className="splash-title">
          Hurton' for a new <br />
          full stack developer?{" "}
        </h2>
        <p className="splash-text">
          <br />
          Andrew Derocher is fluent in many popular languages and <br />
          frameworks including javascript, python, node, and react.
          <br /> Connect using the links below!
        </p>

        <div className="splash-btns-cont">
          <a
            href="https://github.com/aDerocher"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <button className="splash-btn">
              <i className="fab fa-github"></i>{" "}
              <p className="about-btn"> Github</p>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-derocher-54003789/"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <button className="splash-btn">
              <i className="fab fa-linkedin"></i>{" "}
              <p className="about-btn">Linkedin</p>
            </button>
          </a>
          <a href="mailto:am.derocher@gmail.com" className="github-link">
            <button className="splash-btn">
              <i className="far fa-envelope"></i>{" "}
              <p className="about-btn">Email</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
