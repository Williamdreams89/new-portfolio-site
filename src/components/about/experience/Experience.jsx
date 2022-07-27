import React from "react";
import styled from "styled-components";
import { FaCalendar } from "react-icons/fa";

const ExperiencePart = styled.div`
    background-color: rgb(248, 241, 241);
    

    .parent__container{
        padding: 0 1rem 0 0;
    }
  .experience__item {
    width: 100%;
    position: relative;
    padding-bottom:2rem;

    .experience__title{
        font-size: 25px;
        color: blue;
    }

    .item__wrapper{
        margin-left: 1rem;
        text-align: justify;

        p:nth-of-type(1){
            background-color: #000;
            width: fit-content;
            color: white;
            padding: 3px 6px;
        }
    }

    &::before {
      content: "";
      position: absolute;
      border-left: 3px solid orangered;
      width: 2px;
      height: 100%;
      left: -5px;
    }

    .circle__decorator {
      width: 14px;
      height: 14px;
      background-color: orangered;
      position: absolute;
      left: -11px;
      border-radius: 50%;
    }
  }
`;

 


function Experience() {
  return (
    <ExperiencePart className="item__header educ__header">
      <h2 className="item__title experience__title" style={{marginBottom: "1rem"}}>Experience</h2>
      <div className="parent__container">
        <div className="experience__item">
          <div className="circle__decorator"></div>
          <div className="item__wrapper">
            <p>
              <FaCalendar />
              2012 - 2015
            </p>
            <h4>WASSCE - General Science</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              perspiciatis odio assumenda cupiditate ipsum voluptates nihil
              beatae aliquam ex, et doloribus, id magnam fugiat quae. Omnis
              earum inventore nemo quos iste debitis eveniet quia quo, deleniti
              officia, velit quae quod aliquid? Atque, consequatur! Distinctio
              voluptatem atque unde ex vitae enim.
            </p>
          </div>
        </div>
        <div className="experience__item">
          <div className="circle__decorator"></div>
          <div className="item__wrapper">
            <p>
              <FaCalendar />
              2019 - Present
            </p>
            <h4>Bachelor of Science in Health Information Management</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              perspiciatis odio assumenda cupiditate ipsum voluptates nihil
              beatae aliquam ex, et doloribus, id magnam fugiat quae. Omnis
              earum inventore nemo quos iste debitis eveniet quia quo, deleniti
              officia, velit quae quod aliquid? Atque, consequatur! Distinctio
              voluptatem atque unde ex vitae enim.
            </p>
          </div>
        </div>
      </div>
    </ExperiencePart>
  );
}

export default Experience;
