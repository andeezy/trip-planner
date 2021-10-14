import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements.js';
import { HeroContainer, HeroBg, VideoBg, Content, H1, P, BtnWrapper, Input, ArrowForward, ArrowRight } from './HeroElements.js';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [search, setSearch] = useState('');

  const onHover = () => {
    setHover(!hover);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <Content>
        <H1>Beers and Brews</H1>
        <P>Finding your next brew on tap just got easier</P>
        <BtnWrapper>
          <Input value={search} onChange={onChange} />
          <Button to='search' onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true' dark='true' big='true'>
            <FaSearch />
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </BtnWrapper>
      </Content>
    </HeroContainer>
  )
}

export default HeroSection;