import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../svgIcon';
import './header.scss';

const Header = () => {  
  return (
    <section className='head' >
      <div className='head__wpap'>        
        <Link to='/'>
          <SvgIcon  name='logo' color='#FFC500' size='100'/>
        </Link>
        
        {/* <ul className="d-flex">
          <li>
            <Link to="/people/">People</Link>
          </li>
          <li>
            <Link to="/planets/">Planets</Link>
          </li>
          <li>
            <Link to="/starships/">Starships</Link>
          </li>
        </ul> */}
      </div>
    </section>
    
  );
};

export default Header;