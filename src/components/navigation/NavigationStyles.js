import styled from "styled-components";


export const NavigationBar = styled.nav`
    background-color: black;
    height: 4.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Clicker';
    position: fixed;
    z-index: 100;
    font-family: 'Poppins', sans-serif;


    .nav__logo{
        color: aliceblue;
        position: relative;
        padding: 10px;
        
        &::before{
            padding: 10px;
            left: -7px;
            top: -1px;
            content: "";
            position: absolute;
            border-top: 5px solid orangered;
            border-left: 5px solid orangered;
            width: 1px;
            height: 1px;  
        }

        &::after{
            padding: 10px;
            // right: .1px;
            top: 27px;
            content: "";
            position: absolute;
            border-bottom: 5px solid orangered;
            border-right: 5px solid orangered;
            width: 1px;
            height: 1px;  
        }

    }


`;