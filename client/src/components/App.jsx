import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
};

export default App;