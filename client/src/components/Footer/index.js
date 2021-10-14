import React from 'react';
import {Container, Wrap, LinksContainer, LinksWrapper, LinkItems, LinkTitle, Link} from './FooterElements.js';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
                <Link to='/signin'>How it works</Link>
                <Link to='/signin'>Testimonials</Link>
                <Link to='/signin'>Careers</Link>
                <Link to='/signin'>Investors</Link>
                <Link to='/signin'>Terms of Service</Link>
            </LinkItems>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
                <Link to='/signin'>How it works</Link>
                <Link to='/signin'>Testimonials</Link>
                <Link to='/signin'>Careers</Link>
                <Link to='/signin'>Investors</Link>
                <Link to='/signin'>Terms of Service</Link>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
                <Link to='/signin'>How it works</Link>
                <Link to='/signin'>Testimonials</Link>
                <Link to='/signin'>Careers</Link>
                <Link to='/signin'>Investors</Link>
                <Link to='/signin'>Terms of Service</Link>
            </LinkItems>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
                <Link to='/signin'>How it works</Link>
                <Link to='/signin'>Testimonials</Link>
                <Link to='/signin'>Careers</Link>
                <Link to='/signin'>Investors</Link>
                <Link to='/signin'>Terms of Service</Link>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
      </Wrap>
    </Container>
  )
}

export default Footer;