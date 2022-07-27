import React from "react";
import { HomePage } from "./HomeStyles";
import {FaFacebook, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Home() {
  return (
    <>
    <HomePage>
      <div className="social__profile">
        <img src="../images/william.png" alt="not-found" />
        <div className="socials">
            <a href="https://facebook.com/" target="_blank"><FaFacebook /></a>
            <a href="https://twitter.com/"><FaTwitter /></a>
            <a href="https://linkedin.com/"><FaLinkedin /></a>
            <a href="https://github.com/"> <FaGithub /></a>
        </div>
      </div>
      <div className="profile__descr">
        <h3>Hello, my name is Danquah Kwafo William</h3>
        <h3>
          I'm a <span>Full Stack Web developer</span>
        </h3>
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
