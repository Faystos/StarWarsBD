import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import './randomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    planetName: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor((Math.random() * 25) + 2);
    this.swapiService.getPlanet(id)
    .then(planet => {      
      this.setState({
        id,
        planetName: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter        
      });
    });
  }

  render() {
    const { id, planetName, population, rotationPeriod, diameter } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`Планета ${planetName}`}/>
        <div>
          <h4>{ planetName }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}