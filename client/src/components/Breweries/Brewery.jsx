import React from 'react';
import { Container, Wrapper, Row, Column1, Column2, BreweryCard } from './BreweryElements.js';

const Brewery = (props) => {
  return (
    <Container>
      <Row>
        <Column1>
          <BreweryCard>
            {props.brewery.name}
          </BreweryCard>
        </Column1>
        <Column2>
        </Column2>
      </Row>
    </Container>
  )
};

export default Brewery;