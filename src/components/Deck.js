import React, { useEffect } from 'react';
import Card from './Card';
import '../css/Deck.css';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function Deck({ cards }) {
  useEffect(() => {
    Draggable.create('.card', {
      bounds: '#root',
      edgeResistance: 0.65,
      type: 'x,y',
    });
  });

  return (
    <div className='deck'>
      {cards.map((card, i) => {
        console.log(cards[i].code);
        return (
          <Card key={cards[i].code} img={cards[i].image} id={cards[i].code} />
        );
      })}
    </div>
  );
}
export default Deck;
