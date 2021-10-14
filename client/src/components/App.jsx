import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Context from './Context.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      breweries: [],
    }
  }

  render() {
    return (
      <Context.Provider value={{
        storage: this.state.breweries,
      }}>
        <Router>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/search' component={SearchPage} exact />
          </Switch>
        </Router>
      </Context.Provider >
    )
  }
};

export default App;