import React, { Component } from 'react';
import Deck from '../components/Deck';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      shuffle: [],
      draw: [],
      selector: [],
    };
    this.frame = {
      translate: [0, 0],
    };
    this.shuffleCards = this.shuffleCards.bind(this);
    this.drawCards = this.drawCards.bind(this);
    this.getDeck = this.getDeck.bind(this);
  }

  async getDeck() {
    const resp = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
    const data = await resp.json();
    this.setState({ deck: data.deck_id });
    this.drawCards();
  }

  async drawCards() {
    const resp = await fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.deck}/draw/?count=52`
    );
    const data = await resp.json();
    this.setState({ draw: data.cards });
  }

  async shuffleCards() {
    try {
      const resp = await fetch(
        `https://deckofcardsapi.com/api/deck/${this.state.deck}/shuffle/`
      );
      const data = await resp.json();
      this.setState({ shuffle: data });
      this.drawCards();
    } catch (err) {
      console.log(err, 'Oppps something went wrong');
    }
  }

  componentDidMount() {
    this.getDeck();
  }

  render() {
    const { draw } = this.state;
    return !draw.length ? (
      <h1>Loading Please Wait..........</h1>
    ) : (
      <div>
        <div className='btn'>
          <button onClick={this.getDeck} className='shufflebtn'>
            Draw
          </button>
          <button className='shufflebtn' onClick={this.shuffleCards}>
            Shuffle
          </button>
        </div>
        <div className='btn'>
          <h1 className='txt'>{this.state.deck}</h1>
        </div>
        <Deck frame={this.frame} cards={this.state.draw} />
      </div>
    );
  }
}
export default App;
