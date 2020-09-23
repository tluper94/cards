import React from 'react';
import './Card.css';

function Card({ img, id, frame }) {
  return (
    <div>
      <div className='moveable'>
        <img alt={id} src={img}></img>
      </div>
    </div>
  );
}
export default Card;
