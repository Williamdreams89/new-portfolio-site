import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { portfolioImages } from "./imageList";

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
      width: 70%;
      margin: auto;
      input {
        padding: 8px 50% 5px 5px;
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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))
  }

  .portfolio__item {
    width: 100% !important;
    margin-top: 3rem;
    img {
      object-fit: cover;
      width: 90%;
      height: 500px;
      border: 5px solid #333;
      padding: 3px;
      position: relative;
      
      &::before{
        content: url("<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="20" width="20"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M223.7 130.8L149.1 7.77C147.1 2.949 141.9 0 136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l111.3 158.9C143.9 156.4 181.7 137.3 223.7 130.8zM256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77l-73.76 122.1c42 6.5 79.88 25.62 109.5 53.38l111.3-158.9C516.5 14.58 508.9 0 495.1 0z" id="mainIconPathAttribute" fill="#ff4500" stroke="#ff4500"></path></svg>");
        width: 50px;
        height: 50px;
        position: absolute;
      }
    }
  }

  @media screen and (max-width: 740px) {
    
    .projects__container {
      width: 100%;
        display: none;
  
      .portfolio__item{
        width: 90%;
        height: 100%;
  
        .img{
          width: 100%;
        }
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
  const [tag, setTag] = useState("all");
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
            <TagButton setTag={setTag} name="all" />
            <TagButton setTag={setTag} name="htmlcss" />
            <TagButton setTag={setTag} name="django" />
            <TagButton setTag={setTag} name="react" />
          </div>
          <div className="main__container">
            {filteredImages
              .filter((image) => image.tag.toLowerCase().includes(query))
              .map((image) => (
                <div className="projects__container">
                  <div key={image.id} className="portfolio__item">
                    <img src={`../images/${image.imgName}`} alt="" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}

const TagButton = ({ name, setTag, tag }) => {
  return (
    <>
      <button
        tag={tag}
        setTag={setTag}
        onClick={() => setTag(name)}
        className={tag === name ? "active" : ""}
      >
        {name.toUpperCase()}
      </button>
    </>
  );
};

export default Portfolio;
