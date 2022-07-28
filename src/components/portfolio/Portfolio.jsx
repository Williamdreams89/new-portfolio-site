import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { portfolioImages } from "./imageList";

const PortfolioPage = styled.section`
  width: 100vw;
  min-height: 100vh;

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
    input {
      padding: 5px 50% 5px 5px;
      margin-bottom: 1rem;
      wdith: 100vw !important;
      border: 2px solid orangered;
      outline: none;
    }
  }

  .tag__buttons {
    display: flex;
    max-width: 70vw;

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

  .portfolio__item {
    width: 100% !important;
    margin-top: 3rem;
    img {
      object-fit: cover;
      width: 100%;
      width: 400px;
    }
  }

  @media screen and (max-width: 740px) {
    .projects__container {
      background-color: red;
      width: 100%;
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
          <input
            type="text"
            placeholder="Search project by category"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />

          <div className="tag__buttons">
            <TagButton setTag={setTag} name="all" />
            <TagButton setTag={setTag} name="htmlcss" />
            <TagButton setTag={setTag} name="django" />
            <TagButton setTag={setTag} name="react" />
          </div>
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
