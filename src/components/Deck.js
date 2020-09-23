import React from 'react';
import Card from './Card';
import './Deck.css';

function Deck({ cards, frame }) {
  return (
    <div className='flex flex-wrap ma2 justify-center items-center'>
      {cards.map((card, i) => {
        return (
          <Card key={cards[i].code} img={cards[i].image} id={cards[i].id} />
        );
      })}
    </div>
  );
}
export default Deck;
