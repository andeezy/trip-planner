import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements.js';
import { HeroContainer, HeroBg, VideoBg, Content, H1, P, BtnWrapper, Text1, Text2, Input, ArrowForward, ArrowRight } from './MainElements.js';
import { FaSearch } from 'react-icons/fa';

const Main = () => {
  const [hover, setHover] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

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
          <Text1>Find</Text1>
          <Input value={name} onChange={(e) => {
            setName(e.target.value);
            console.log('name', name);
          }} />
          <Text2>Near</Text2>
          <Input value={city} onChange={(e) => setCity(e.target.value)} />
          <Button to='discover' onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true' dark='true' big='true'
            smooth={true} duration={500} spy={true} exact='true'>
            <FaSearch />
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </BtnWrapper>
      </Content>
    </HeroContainer>
  )
}

export default Main;