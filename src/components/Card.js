import React from 'react';
import '../css/Card.css';

function Card({ img, id }) {
  return (
    <div id={id} className='card'>
      <div>
        <img alt={id} src={img}></img>
      </div>
    </div>
  );
}
export default Card;
