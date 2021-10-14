import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements.js';
import { Container, Background, VideoBg, Content, H1, P, BtnWrapper, Text1, Text2, Input, ArrowForward, ArrowRight } from './MainElements.js';
import { FaSearch } from 'react-icons/fa';

const Main = (props) => {
  const { onClick } = props;
  const [hover, setHover] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Container>
      <Background>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Background>
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
            smooth={true} duration={500} spy={true} exact='true' onClick={() => onClick(name, city)} >
            <FaSearch />
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </BtnWrapper>
      </Content>
    </Container>
  )
}

export default Main;