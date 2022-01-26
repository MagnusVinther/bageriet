import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './components/appRouter/AppRouter';
import { Navigation } from './components/Partials/Navigation/Nav';
import Burgermenu from './components/Partials/Burger/Burgermenu';

function App() {
  return (
    <div className="container" id="outer-container">
      <Router>
        <Burgermenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Navigation />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
