import React from "react";
import { HomePage } from "./HomeStyles";
import {FaFacebook, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import Typical from "react-typical";


export default function Home() {
  return (
    <>
    <HomePage>
      <div className="social__profile">
        <img src="../images/william.png" alt="not-found" />
        <div className="socials">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/"><FaTwitter /></a>
            <a href="https://linkedin.com/"><FaLinkedin /></a>
            <a href="https://github.com/"> <FaGithub /></a>
        </div>
      </div>
      <div className="profile__descr">
        <h3>Hello, my name is Danquah Kwafo William</h3>

        <p style={{display: "flex", gap: "3px"}}>
          I'm proficient in <span style={{color: "orangered"}}>
          <Typical
              steps={[
                "Health Informatics",
                8000,
                "Data Analytics & Visualization",
                8000,
                "HTML, CSS & JavaScript",
                8000,
                "ReactJs",
                8000,
                "RESTful APIs development",
                8000,
                "Django Web development",
                8000,
              ]}
              loop={Infinity}
            />
          </span>
        </p>
        <p>
          My Core are basically Python/Django & ReactJS. My expertise is to
          create data-driven websites with robust and yet user-friendly
          interfaces.
        </p>
        <button>More About Me</button>
      </div>
    </HomePage>
    </>
  );
}
