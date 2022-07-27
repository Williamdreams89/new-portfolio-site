import styled from "styled-components";

export const HomePage = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 3px 25px #333;
  margin-bottom: 5rem;
  


  img {
    object-fit: cover;
    max-width: 600px;
    min-width: 400px;
    height: 500px;
    background-color: orangered;
    margin-top: 3rem !important;
    border-radius: 50% 50% 0 0;
    padding-top: 1rem;
  }

  .profile__descr {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: justify;
    width: 80%;
    margin: auto;

    button {
      background-color: orangered;
      border: none;
      outline: none;
      padding: 0.8rem 18px;
      margin-bottom: 5rem;
      color: white;
      width: fit-content;
      font-size: 16px;
      border-radius: 20px;
      margin-top: 3rem; 
    }
  }

  .social__profile{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .socials {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & a {
      color: #000;
    }

    &::after {
      content: "";
      width: 0.2rem;
      height: 7rem;
      background-color: black;
      position: relative;
      left: 7px;
    }
  }

  @media screen and (min-width: 741px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    margin: auto;
    margin-bottom: 5rem;
    height: 100vh;



    .profile__descr{
        max-width: 400px;
        
    }
  
`;
