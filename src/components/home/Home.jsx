import React from "react";
import { HomePage } from "./HomeStyles";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Typical from "react-typical";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <HomePage>
        <div className="social__profile">
          <img src="../images/william.png" alt="not-found" />
          <div className="socials">
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com/"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
        <div className="profile__descr">
          <h3>Hello, my name is Danquah Kwafo William</h3>

          <p style={{ display: "flex", gap: "3px" }}>
            I'm proficient in{" "}
            <span style={{ color: "orangered" }}>
              <Typical
                steps={[
                  "Health Informatics",
                  8000,
                  "Data Analytics",
                  8000,
                  "HTML, CSS & JavaScript",
                  8000,
                  "ReactJs",
                  8000,
                  "APIs development",
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
