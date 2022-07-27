import React from "react";
import styled from "styled-components";
import AboutMyEducation from "./education/AboutMyEducation";
import Experience from "./experience/Experience";
import AboutMePersonally from "./personal/AboutMePersonally";
import AboutMySkills from "./skills/AboutMySkills";
import AboutMyTestimonials from "./testimonials/AboutMyTestimonials";

const AboutSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 3rem;

  .section__container {
    margin: auto;

    @media screen and (max-width: 600px){
      width: 90%;
    }
    @media screen and (min-width: 601px) and (max-width: 900px){
      width: 80%;
    }
    @media screen and (min-width: 901px){
      width: 70%;
    }

    h1 {
      text-transform: uppercase;
      position: relative;
      margin-bottom: 5rem;

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

  .about__items{
    position: relative;

    &::before{
      content: "";
      position: absolute;
      width: 6rem;
      height: 6rem;
      border-left: 7px solid orangered;
      border-top: 7px solid orangered;
      left: -20px;
      top: -10px;
    }

    &::after{
      content: "";
      position: absolute;
      width: 6rem;
      height: 6rem;
      border-right: 7px solid orangered;
      border-bottom: 7px solid orangered;
      right: -10px;
      bottom: -10px;
    }
  }

`;


export default function About() {
  return (
    <AboutSection id="about">
      <div className="section__container">
        <h1 className="section__title">About Me</h1>
        <div className="about__items">
          {/* About Self */}
          <AboutMePersonally />
          {/* About Skills */}
          <AboutMySkills />
          {/* About Education */}
          <div className="experience__education">
            <AboutMyEducation />
            <Experience />
          </div>
          {/* About Testimonials */}
          <AboutMyTestimonials />
        </div>
      </div>
    </AboutSection>
  );
}
