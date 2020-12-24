import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    load: true,
    error: false,    
  };  

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {    
    this.setState({ 
      planet,
      load: false,
      error: false
    });
  };

  onErrorImg = ({ target }) => {
    target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  };  

  onError = err => {
    this.setState({ 
      error: true,
      load: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor((Math.random() * 18) + 2);    
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
  const { planet, load, error, srcImg } = this.state;
  const hasData = !(load || error);
  const viewError = error ? <ErrorIndicator /> : null;
  const viewLoader = load ? <Loader /> : null;
  const viewPlanet = hasData ? <PlanetView planet = { planet } srcImg = { srcImg } onErrorImg = { this.onErrorImg } onLoadImg = { this.onLoadImg } /> : null;
    return (
      <> 
        { viewError }     
        { viewLoader } 
        { viewPlanet }
      </>
    );
  }
}

const PlanetView = ({ planet, srcImg, onErrorImg }) => {  
  const { id, name, population, rotationPeriod, diameter } = planet;   
 
  return (    
    <section className='random_planet'>
      <div className='random_planet__wrap'>
        <img src={ `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` } onError = { onErrorImg }  alt = { `Планета ${name}` }/>
        <div className='random-planet__planet_description'>
          <h4>{ name }</h4>
          <ul>
            <li>
              <span>Население: </span>
              <span>{ population }</span>
            </li>
            <li>
              <span>Период вращения: </span>
              <span>{ rotationPeriod }</span>
            </li>
            <li>
              <span>Диаметр: </span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>      
    </section>
  );
}