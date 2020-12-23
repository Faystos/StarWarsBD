import React from 'react';
import Sprite from '../../img/sprite.svg';

const SvgIcon = ({name, color, size, className}) => {
  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${Sprite}#icon-${name}`} />
    </svg>
  )
}

export default SvgIcon;