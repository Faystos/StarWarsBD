import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import PersonPage from '../personPage';
import SwapiService from '../../services/Services';



export default class App extends Component {
  swapiService = new SwapiService();

  render () {

    return (
      <React.Fragment>
        <Header />
        <RandomPlanet />
        <PersonPage getData = {this.swapiService.getAllPeoples}/>        
      </React.Fragment>
    );
  }
  
}

