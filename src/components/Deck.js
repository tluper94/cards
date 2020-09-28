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
      dragResistance: 0.1,
      edgeResistance: 0.1,
      autoScroll: 1,
      type: 'x,y',
    });
    gsap.to('.card', {
      x: 0,
      y: 0,
      snap: 'x,y',
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
