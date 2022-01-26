import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './components/appRouter/AppRouter';
import { Navigation } from './components/Partials/Navigation/Nav';
import Burgers from './components/Partials/Burger/Burgermenu'
import { Header } from './components/Partials/Header/Header';
import { Main } from './components/Partials/Main/Main';

function App() {
  return (
    <div className="container" id="outer-container">
      <Router>
        <Header />
        <Burgers pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Navigation />
        <Main>
          <AppRouter />
        </Main>
      </Router>
    </div>
  );
}

export default App;
