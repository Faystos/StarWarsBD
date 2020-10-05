import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import PersonPage from '../personPage';
import StarshipPage from '../starshipPage';
import SwapiService from '../../services/Services';




export default class App extends Component {
  swapiService = new SwapiService();

  render () {

    return (
      <React.Fragment>
        <Header />
        <RandomPlanet />
        <PersonPage getDataItems = {this.swapiService.getAllPeoples} getDataItem = {this.swapiService.getPerson} getImg = {this.swapiService.getPersonImg}/> 
        <hr />       
        <StarshipPage getDataItems = {this.swapiService.getAllStarships} getDataItem = {this.swapiService.getStarship} getImg = {this.swapiService.getStarshipImg}/>     
        <hr />       
      </React.Fragment>
    );
  }
  
}

