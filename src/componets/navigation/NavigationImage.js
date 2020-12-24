import React from 'react';

const NavigationImage = ({imgUrl, altDesc}) => {  
  return <img src={`${imgUrl}`} alt={`ССылка указывающая на ${altDesc}.`}/>;
}

export default NavigationImage;