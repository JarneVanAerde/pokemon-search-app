import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './components/shared/Nav';
import Routes from './configs/Routes';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
