import React from 'react';
import '../css/slot.css';

function Slot({ deck, draw }) {
  return (
    <div className='container'>
      <div className='slot'>
        <h1 className='ace'>A</h1>
      </div>
      <div className='slot'>
        <h1 className='ace'>A</h1>
      </div>
      <div className='slot'>
        <h1 className='ace'>A</h1>
      </div>
      <div className='slot'>
        <h1 className='ace'>A</h1>
      </div>
      <div className='btn'>
        <button onClick={deck} className='shufflebtn'>
          New Game
        </button>
        <button onClick={draw} className='shufflebtn'>
          Draw
        </button>
      </div>
    </div>
  );
}
export default Slot;
