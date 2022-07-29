import React from "react";
import {
  FaInbox,
  FaShare,
  FaPhoneVolume,
  FaSearchLocation,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactPage = styled.div``;

function ContactMe() {
  return (
    <ContactPage className="contactme__main__section" id="contact">
      <div className="contact__parent__container">
        <div className="contact__header">
          <h4>
            CONTACT <hr className="horizontal" />
          </h4>
          <h1 style={{ marginBottom: "2rem" }}>CONTACT ME</h1>
        </div>
        <div className="contact__children">
          <div className="contact__object">
            <i>
              <FaSearchLocation />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">My Address</h2>
              <p className="contact__value">
                77 Lowcost Street, Ejura, Kumasi, Ghana
              </p>
            </div>
          </div>

          <div className="contact__object">
            <i>
              <FaShare />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">Social Profiles</h2>
              <div className="contact__inline__icons">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://twitter.com/DanquahKwafo"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://web.facebook.com/danquah.william/"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/danquahwilliam/"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href=""
                >
                  <FaSkype />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/danquah-kwafo-william-b14093193/"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Williamdreams89"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="contact__object">
            <i>
              <FaInbox />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">Email Me</h2>
              <p className="contact__value" style={{ fontSize: "14px" }}>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:williamdreams89@outlook.com"
                  style={{ color: "grey" }}
                >
                  williamdreams89@outlook.com
                </motion.a>
              </p>
            </div>
          </div>

          <div className="contact__object">
            <i>
              <FaPhoneVolume />
            </i>
            <div className="contact__detail">
              <h2 className="contact__item__title">Call Me</h2>
              <p className="contact__value">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="tel:+233541017933"
                  style={{ color: "grey" }}
                >
                  +233 5410 17 933
                </motion.a>
              </p>
            </div>
          </div>
        </div>
        <div className="contact__form">
          <div className="contact__form__parent">
            <div className="row__big__screens">
              <input
                type="text"
                className="text__field"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="email__field"
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              className="subject__field"
              placeholder="Subject"
            />
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
            ></textarea>
            <div className="contact__buttons">
              <button
                type="submit"
                className="contactme__btn"
                style={{ color: "aliceblue" }}
              >
                <i>
                  <SendIcon />
                </i>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="down__space"></div>
    </ContactPage>
  );
}

export default ContactMe;
