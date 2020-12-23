import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import SwapiService from '../../services/Services';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersonPage, StarshipPage, PlanetPage } from '../pages';
import { SwapiServiceProvider } from '../swapiServiceContext';

export default class App extends Component {
  swapiService = new SwapiService();

  render () {

    return (
      <>
        <SwapiServiceProvider value={ this.swapiService }>
          <Router>
            <Header />
            <RandomPlanet />
            <Route path='/people/' component={ PersonPage } />
            <Route path='/starships/' component={ StarshipPage } />
            <Route path='/planets/' component={ PlanetPage }/>
          </Router>            
        </SwapiServiceProvider>
      </>
    );
  }  
}