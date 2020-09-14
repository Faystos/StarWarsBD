import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';
import './randomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    load: true,
    error: false,
    srcImg: id => `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({ 
      planet,
      load: false,
      error: false
    });
  }

  onErrorImg = () => {
    this.setState({
      srcImg: (id) => {
        id = 'big-placeholder';
        return `https://starwars-visualguide.com/assets/img/${id}.jpg`;
      }
    });
  }

  onError = err => {
    this.setState({ 
      error: true,
      load: false,
    });
  }

  updatePlanet() {
    const id = Math.floor((Math.random() * 25) + 2);    
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
  const { planet, load, error, srcImg } = this.state;
  const hasData = !(load || error);
  const viewError = error ? <ErrorIndicator /> : null;
  const viewLoader = load ? <Loader /> : null;
  const viewPlanet = hasData ? <PlanetView planet = { planet } srcImg = { srcImg } onErrorImg = { this.onErrorImg } /> : null;
    return (
      <div className = "random-planet jumbotron rounded"> 
        { viewError }     
        { viewLoader } 
        { viewPlanet }
      </div>
    );
  }
}

const PlanetView = ({ planet, srcImg, onErrorImg }) => {  
  const { id, planetName, population, rotationPeriod, diameter } = planet;
  return (    
    <React.Fragment>
      <img className="planet-image" src={ srcImg(id) } onError = { onErrorImg }  alt={`Планета ${planetName}`}/>
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