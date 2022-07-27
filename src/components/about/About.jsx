import React from "react";
import styled from "styled-components";
import AboutMyEducation from "./education/AboutMyEducation";
import Experience from "./experience/Experience";
import AboutMePersonally from "./personal/AboutMePersonally";

const AboutSection = styled.section`
  width: 100vw;
  min-height: 100vh;

  .section__container {
    width: 90%;
    margin: auto;

    h1 {
      text-transform: uppercase;
      position: relative;
      margin-bottom: 3rem;

      &::before {
        content: "";
        height: 6px;
        width: 70px;
        background-color: orangered;
        position: absolute;
        top: 2.3rem;
      }

      &::after {
        content: "";
        height: 6px;
        width: 35px;
        background-color: orangered;
        position: absolute;
        top: 2.9rem;
        left: 0;
      }
    }
  }

  @media screen and (min-width: 741px){

      .experience__education{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
      }
  }
  }

  @media screen and (max-width: 740px){

      .experience__education{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
      }
  }


`;


const kboy = () =>{
  
}

export default function About() {
  return (
    <AboutSection id="about">
      <div className="section__container">
        <h1 className="section__title">About Me</h1>
        <div className="about__items">
          {/* About Self */}
          <AboutMePersonally />
          {/* About Skills */}
          {/* About Education */}
          <div className="experience__education">
            <AboutMyEducation />
            <Experience />
          </div>
          {/* About Testimonials */}
        </div>
      </div>
    </AboutSection>
  );
}
