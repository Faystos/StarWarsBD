import React from 'react';

const Row = ({ left, rigth }) => {
  return (
    <section className='row'>
      <div className='row__wrap'>
        <div className='row__col_left'>{left}</div>
        <div className="row__col_rigth">{rigth}</div>
      </div>      
    </section>
  );

};

export default Row;