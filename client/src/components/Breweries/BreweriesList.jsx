import React from 'react';
import Brewery from './Brewery.jsx';

const BreweriesList = (props) => {
  return (
    <div className='breweries-list'>
      {props.breweries.map((brewery, index) =>
        <Brewery brewery={brewery} key={index} />)}
    </div>
  )
}

export default BreweriesList;