import React, { useState } from 'react';

const Context = React.createContext({});

const Provider = (props) => {

  const [breweries, setBreweries] = useState([]);

  const breweryContext = {
    breweriesContext: breweries,
    storeBreweries: (arrayFromAPI) => {
      setBreweries([...arrayFromAPI]);
    }
  };

  return (
    <Context.Provider value={breweryContext}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };