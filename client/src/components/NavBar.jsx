import React, { useState, useEffect } from 'react';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavRouter, NavBtn, NavBtnLink } from './NavElements.js';
import { FaBars } from 'react-icons/fa';
import { IoBeerOutline } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { getRequest } = props;
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const onClick = () => {
    console.log('Click');
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav} >
        <NavContainer>
          <NavLogo to='/' onClick={toggleHome}>brews{'  '}<IoBeerOutline /> </NavLogo>
          <MobileIcon onClick={props.toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={onClick} >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={getRequest} >Discover</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
            </NavItem> */}
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;