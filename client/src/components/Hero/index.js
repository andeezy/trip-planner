import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement.js';
import { HeroContainer, HeroBg, VideoBg, Content, H1, P, BtnWrapper, ArrowForward, ArrowRight } from './HeroElements.js';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <Content>
        <H1>Beers and Brews</H1>
        <P>Finding your next brew on tap just got easier</P>
        <BtnWrapper>
          <Button to='singup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true' dark='true' big='true'>
            Get strated {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </Content>
    </HeroContainer>
  )
}

export default HeroSection;