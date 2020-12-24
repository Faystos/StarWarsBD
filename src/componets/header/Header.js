import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../svgIcon';

const Header = () => {  
  return (
    <section className='head' >
      <div className='head__wpap'>        
        <Link to='/'>
          <SvgIcon  name='logo' color='#FFC500' size='100'/>
        </Link>       
      </div>
    </section>    
  );
};

export default Header;