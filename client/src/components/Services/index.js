import React from 'react';
// import Icon1 from '../../images/svg-1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>Drink</ServicesH2>
          <ServicesP>We help you find your next favorite brewery.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon2} /> */}
          <ServicesH2>Explore</ServicesH2>
          <ServicesP>We introduce you to new beers you've never tasted before.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Refine</ServicesH2>
          <ServicesP>We also provide stuff</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;