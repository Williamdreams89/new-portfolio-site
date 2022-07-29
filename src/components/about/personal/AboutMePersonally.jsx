import React from "react";
import styled from "styled-components";

const MySelf = styled.div`
  text-align: justify;
  margin-bottom: 2rem;
  h3 {
    color: black;
    margin-bottom: 1rem;
    text-align: center !important;

    span {
      color: orangered;
    }
  }

  p {
    span {
      border-bottom: 2px solid orangered;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media screen and (min-width: 741px) {
    .self__descr {
      display: flex;
      gap: 4rem;

      ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        width: 50%;
      }
    }
  }
`;

export default function AboutMePersonally() {
  return (
    <MySelf>
      <h3>
        More About <span className="brand__name">William Dreams</span>
      </h3>
      <div className="self__descr">
        <p>
          Actually, my name is{" "}
          <span className="real__name">Danquah Kwafo William</span>. My other
          names are Paa Willy & William Dreams. A vibrant and determined young
          lad who is forging his way into the software engineering world. <br />{" "}
          <br /> I discovered my passion for software engineering when I was a
          sophomore in the University; it was then, when I started learning more
          for my passion. I am a level 300 undergrad pursuing my bachelor's
          degree at University of Cape Coast, Ghana, majoring in Health
          Information Management. <br /> <br />I was introduced to Computer
          programming with Python in my sophomore year, which landed me into
          delving more web development concepts with Django with which I started
          the never-ending journey of becoming a full stack developer along with
          sharpening my eye for innovations.
          <br /> <br />
        </p>
        <div className="demo__info">
          <p>
            <b>
              <i>
                ...other pertinent information: <br /> <br />
              </i>
            </b>
          </p>

          <ul className="my__details">
            <li className="email">Email: williamdreams89@outlook.com</li>
            <li className="phone">Phone: +233541017933</li>
            <li className="city">Kumasi, Ghana</li>
            <li className="age">Age: 45</li>
            <li className="degree">Degree: Bachelor</li>
            <li className="freelance">Freelance: Available</li>
            <li className="religion">Religion: Christianity</li>
          </ul>
        </div>
      </div>
    </MySelf>
  );
}
