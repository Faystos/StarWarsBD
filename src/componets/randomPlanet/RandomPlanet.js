import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import './randomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    load: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, load: false });
  }

  updatePlanet() {
    const id = Math.floor((Math.random() * 25) + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
  const { planet, load } = this.state;
  const loader = load ? <Loader/> : null;
  const viewPlanet = load ? null : <PlanetView planet = { planet }/>
    return (
      <div className = "random-planet jumbotron rounded">      
        { loader } 
        { viewPlanet }
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {  
  const { id, planetName, population, rotationPeriod, diameter } = planet;
  return (    
    <React.Fragment>
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
    </React.Fragment>
  );
}