import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { portfolioImages } from "./imageList";
import { FaCode, FaLink } from "react-icons/fa";

const PortfolioPage = styled.section`
  width: 90vw;
  min-height: 100vh;
  margin: auto;



  .section__container {
    width: 90%;
    margin: 3rem auto;

    .section__title {
      text-transform: uppercase;
      position: relative;
      margin-bottom: 3rem;

      &::before {
        content: "";
        position: absolute;
        border-top: 5px solid orangered;
        width: 70px;
        top: 2.2rem;
      }

      &::after {
        content: "";
        position: absolute;
        border-top: 5px solid orangered;
        width: 35px;
        top: 2.9rem;
        left: 0;
      }
    }
  }

  .parent__container {
    width: 100%;
    
    .input__container{
      width: 80%;
      margin: auto;
      
      input {
        font-size: 17px;
        padding: 8px 5px 5px 5px;
        margin-bottom: 1rem !important;
        width: 100%;
        border: 2px solid orangered;
        outline: none;
        border-radius: 10px;
        
      }
    }
  }

  .tag__buttons {
    display: flex;
    max-width: 30vw;
    gap: 10%;

    justify-content: space-around;
    align-items: center;
    margin: auto;

    & > * {
      width: 4.8rem;
      padding: 3px 6px;
      border: 2px solid orangered;
      border-radius: 10px;
      background-color: white;

      &:hover,
      .active {
        background-color: orangered;
        color: white;
      }
    }
  }

  .main__container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }

  .portfolio__item {
    width: 100% !important;
    margin-top: 3rem;
    border: 5px solid  #9c989e;
    height: 515px;
    border-radius:12px;

   

    .portfolio__detail{
      height: 202px;
      width: 100%;
      background-color: orangered;
      display: flex;
      justify-content:center;
      align-items: center;
      flex-direction: column;

      .portfo__icons{
        display: flex;
        gap: 1rem;
        margin-bottom: 10px;
      }

      .port__descrip{
        text-align: center;
        color: aliceblue;
        
      }
    }
    
    img {
      padding: 3px;
      object-fit: cover;
      width: 100%;
      height: 300px;
      
      ::before{
        content: ("<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="20" width="20"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M223.7 130.8L149.1 7.77C147.1 2.949 141.9 0 136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l111.3 158.9C143.9 156.4 181.7 137.3 223.7 130.8zM256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.

      }

    }
    
  }

  @media screen and (max-width: 740px) {
    
    .portfolio__item{
      width: 90%;
      height: 100%;
      display: none;
  
      .img{
        width: 100%;
      }
    }
    
  }

  @media screen and (min-width: 741px) {
    .projects__container{
      display: none;
    }
  }


`;

function Portfolio() {
  const [query, setQuery] = useState("");
  const [tag, settag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(portfolioImages)
      : setFilteredImages(portfolioImages.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <PortfolioPage id="portfolio">
      <div className="section__container">
        <h1 className="section__title">Portfolio</h1>
        <div className="parent__container">
          <div className="input__container">
            <input
              type="text"
              placeholder="Search project by category"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </div>

          <div className="tag__buttons">
            <TagButton
              settag={settag}
              name="all"
              tagActive={tag === "all" ? true : false}
            />
            <TagButton
              settag={settag}
              name="htmlcss"
              tagActive={tag === "htmlcss" ? true : false}
            />
            <TagButton
              settag={settag}
              name="django"
              tagActive={tag === "django" ? true : false}
            />
            <TagButton
              settag={settag}
              name="react"
              tagActive={tag === "react" ? true : false}
            />
          </div>
          <div className="main__container">
            {filteredImages
              .filter((image) => image.tag.toLowerCase().includes(query))
              .map((image) => (
                <div key={image.id} className="portfolio__item">
                  <img src={`../images/${image.imgName}`} alt="" />
                  <div className="portfolio__detail">
                    <div className="portfo__icons">
                      <FaCode style={{ color: "white", fontSize: "26px" }} />
                      <FaLink style={{ color: "white", fontSize: "26px" }} />
                    </div>
                    <div className="port__descrip">
                      <h4 className="item__name">{image.title}</h4>
                      <div className="dev__tools__icon"></div>
                      <p className="intro">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}

const TagStyle = styled.button`
  .tag {
    width: 4.8rem;
    padding: 3px 6px;
    border: 2px solid orangered;
    border-radius: 10px;
    background-color: white;

    &:hover,
    .active {
      background-color: orangered;
      color: white;
    }
  }
`;

const TagButton = ({ name, settag, tag, tagActive }) => {
  return (
    <>
      <TagStyle
        tag={tag}
        settag={settag}
        onClick={() => settag(name)}
        className={`tag ${tagActive ? "active" : null}`}
      >
        {name.toUpperCase()}
      </TagStyle>
    </>
  );
};

export default Portfolio;
