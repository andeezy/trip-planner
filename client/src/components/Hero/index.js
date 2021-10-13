import React from 'react';
// import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements.js';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src='https://drive.google.com/file/d/1bLEdDfyHjM8mZW_fCMnnSSVLGN7t9SAA/view?usp=sharing' type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;