import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import SignIn from './SignIn.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
      </Switch>
    </Router>
  )
};

export default App;