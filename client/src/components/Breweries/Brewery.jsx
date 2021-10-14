import React from 'react';
import { Container, Wrapper, Row, Column1, Column2, BreweryCard } from './BreweryElements.js';

const Brewery = (props) => {
  return (
    <div className='brewery' >
      <Container id={'discover'}>
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
    </div>
  )
};

export default Brewery;