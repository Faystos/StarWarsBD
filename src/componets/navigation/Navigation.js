import React from 'react';
import { Link } from 'react-router-dom';
import  NavigationImage  from './NavigationImage';
import people from '../../img/people.png';
import starShips from '../../img/starShips.png';
import planet from '../../img/planet.png'

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="navigation__wrap">
        <ul >
          <li>
            <Link to="/StarWarsBD/people/"><NavigationImage imgUrl={people} altDesc={`персонажей`}/><p>Персонажи</p></Link>
          </li>
          <li>
            <Link to="/StarWarsBD/planets/"><NavigationImage imgUrl={planet} altDesc={`планет`}/><p>Планеты</p></Link>
          </li>
          <li>
            <Link to="/StarWarsBD/starships/"><NavigationImage imgUrl={starShips} altDesc={`космических кораблей`}/><p>Звёздные корабли</p></Link>
          </li>
        </ul>
      </div>
    </section>
    
  );
}

export default Navigation;