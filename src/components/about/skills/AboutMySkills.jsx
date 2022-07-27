import React from 'react'
import styled from 'styled-components'

const Skills = styled.div`
    width: 100%;
    margin-bottom: 2rem;

    .percent__bar{
        width: 100%;
        height: .8rem;
        background-color: #e8dfec;
        border-radius: 10px;
        
        .html__skill__percent__level{
            border-radius: 10px;
            width: 90%;
            background-color: orangered;
            height: 100%;
        }
        
        .css__skill__percent__level{
            border-radius: 10px;
            width: 94.5%;
            background-color: orangered;
            height: 100%;
        }
        
        .javascript__skill__percent__level{
            border-radius: 10px;
            width: 76.99%;
            background-color: orangered;
            height: 100%;
        }
        
        .python__skill__percent__level{
            border-radius: 10px;
            width: 90%;
            background-color: orangered;
            height: 100%;
        }
        
        .django__skill__percent__level{
            border-radius: 10px;
            width: 75%;
            background-color: orangered;
            height: 100%;
        }
        
        .drf__skill__percent__level{
            border-radius: 10px;
            width: 70%;
            background-color: orangered;
            height: 100%;
        }
        
        .react__skill__percent__level{
            border-radius: 10px;
            width: 60%;
            background-color: orangered;
            height: 100%;
        }
        
        .flutter__skill__percent__level{
            border-radius: 10px;
            width: 5%;
            background-color: orangered;
            height: 100%;
        }
        
        .git__skill__percent__level{
            border-radius: 10px;
            width: 65%;
            background-color: orangered;
            height: 100%;
        }
        
        .dbms__skill__percent__level{
            border-radius: 10px;
            width: 75%;
            background-color: orangered;
            height: 100%;
        }
    }

    .skills__children{
        @media screen and (max-width: 740px){
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 1rem;
        }

        @media screen and (min-width: 741px){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 10%;
            row-gap: 10%;
            margin-bottom: 6rem;
        }
        
    }
`;

function AboutMySkills() {
  return (
    <Skills>
         <div className="skills__section">
          <div className="parent__container">
            <div className="skills__header">
              <h2 className="header__title">
                Skills 
              </h2>
            </div>
            
            <div className="skills__children">
              <div className="skills__child">
                <p className="skill__title ">
                  HTML <span className="percentage__level">90%</span>
                </p>
                <div className="percent__bar">
                  <div className="html__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  CSS <span className="percentage__level">94.5%</span>
                </p>
                <div className="percent__bar">
                  <div className="css__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  JAVASCRIPT <span className="percentage__level">76.99%</span>
                </p>
                <div className="percent__bar">
                  <div className="javascript__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  PYTHON <span className="percentage__level">90%</span>
                </p>
                <div className="percent__bar">
                  <div className="python__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  DJANGO <span className="percentage__level">75%</span>
                </p>
                <div className="percent__bar">
                  <div className="django__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  DRF APIs <span className="percentage__level">90%</span>
                </p>
                <div className="percent__bar">
                  <div className="drf__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  REACTJS <span className="percentage__level">60%</span>
                </p>
                <div className="percent__bar">
                  <div className="react__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  FLUTTER <span className="percentage__level">5%</span>
                </p>
                <div className="percent__bar">
                  <div className="flutter__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  GIT <span className="percentage__level">65%</span>
                </p>
                <div className="percent__bar">
                  <div className="git__skill__percent__level"></div>
                </div>
              </div>
              <div className="skills__child">
                <p className="skill__title ">
                  DBMS <span className="percentage__level">75%</span>
                </p>
                <div className="percent__bar">
                  <div className="dbms__skill__percent__level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Skills>
  )
}

export default AboutMySkills