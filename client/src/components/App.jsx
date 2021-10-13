import React from 'react';
import axios from 'axios';
import Context from './Context.jsx';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  )
};

export default App;