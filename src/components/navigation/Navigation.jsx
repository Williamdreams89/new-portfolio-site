import React, { useState } from 'react'
import { NavigationBar } from './NavigationStyles';
import {FaUser, FaList, FaBriefcase, FaComments, FaHome} from 'react-icons/fa'


import styled from 'styled-components';

const Burger = styled.div`
    width: 3rem;
    height: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1;
    
    
    @media screen and (min-width:741px){
        display: none;
    }
    
    div{
        background-color:${({showMenu})=> showMenu ? "orangered" : "white"};
        width: ${({showMenu})=> showMenu ? "1.9rem" : "3rem"};
        height: .3rem;
        cursor: pointer;
        transform-origin: ${({showMenu})=> showMenu ? "14px" : "16px"};
        transition: transform all .3s;
        position: ${({showMenu})=> showMenu ? "fixed" : null};
        right: ${({showMenu})=> showMenu ? "1rem" : null};

        &:nth-of-type(1){
            transform: ${({showMenu})=> showMenu ? "rotate(45deg)" : ""};
        }
        &:nth-of-type(2){
         display: ${({showMenu})=> showMenu ? "none" : ""};   
        }

        &:nth-of-type(3){
            transform: ${({showMenu})=> showMenu ? "rotate(-45deg)" : ""};
        }
    }


`;


const NavList = styled.ul`
    display: ${({showMenu})=> showMenu ? "flex" : "none"};
    justify-content: space-between;
    width: 60%;
    align-items: center;

    & a{
        color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem !important;
        font-size: 20px;
        transition: .3s ease-out;

        &:hover{
            color: orangered;
        }
    }

    li{
        width: 90%;
        text-align: center;
        
    }



    @media screen and (max-width: 740px){
        position: fixed;
        top: 0;
        flex-direction: column;
        background-color: rgba(0,0,0, .9);
        width:80vw;
        right: 0;
        height: 70vh;
        gap: 1rem;
        align-items: center;
        padding-top:2rem;

        & a{
            color: aliceblue;
        }

        li:nth-last-of-type(){
            color: red;
        }

        li:nth-of-type(5){
            margin-bottom: 2rem
        }
    }


    @media screen and (min-width: 741px){
        position: none;
        display: flex;

        .home__icon{
            display: none;
        }

        li a{
        font-size: 17px ;
        }
    }
`;


export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <NavigationBar> 
        <h2 className='nav__logo'>William Dreams</h2>
        {<NavList className='nav__menu' showMenu={showMenu}>
            <li><a href="#"><FaHome className='home__icon' />Home</a></li>
            <li><a href="#about"><FaUser className='home__icon'  />About Me</a></li>
            <li><a href="#portfolio"><FaList className='home__icon'  />Portfolio</a></li>
            <li><a href="#services">< FaBriefcase className='home__icon' /> Services</a></li>
            <li><a href="#contact">< FaComments className='home__icon' />Contact Me</a></li>
        </NavList>}

        <Burger showMenu={showMenu} onClick={()=>{setShowMenu(!showMenu)}}>
            <div />
            <div />
            <div />
        </Burger>
    </NavigationBar>
  )
}
