import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/app';
import SwapiService from './services/Services';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);



new SwapiService().getPlanet(7).then(planet => console.log(planet));
