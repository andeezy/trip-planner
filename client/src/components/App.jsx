import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SearchPage from './pages/SearchPage.jsx';
// import Context from './Context.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/search' component={SearchPage} exact />
      </Switch>
    </Router>
  )
};

export default App;