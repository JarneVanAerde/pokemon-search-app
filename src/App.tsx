import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './components/shared/Nav';
import Routes from './configs/Routes';

const App = (): ReactElement => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
