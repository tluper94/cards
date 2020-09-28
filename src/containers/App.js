import React, { Component } from 'react';
import Deck from '../components/Deck';
import '../css/App.css';
import Slot from '../components/Slot';
import CardSlots from '../components/CardSlots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: [],
      cards: [],
      deck: [],
      shuffle: [],
      draw: [],
    };
    this.drawCards = this.drawCards.bind(this);
    this.getDeck = this.getDeck.bind(this);
    this.getRemainingCards = this.getRemainingCards.bind(this);
  }

  async getDeck() {
    const resp = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
    const data = await resp.json();
    this.setState({ id: data.deck_id });
    this.drawCards();
  }

  async drawCards() {
    const resp = await fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.id}/draw/?count=4`
    );
    const data = await resp.json();
    this.setState({ deck: data });
    this.setState({ cards: data.cards });
  }

  async getRemainingCards() {
    const resp = await fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.id}/draw/?count=4`
    );
    const data = await resp.json();
    let cards = this.state.cards;
    let moreCards = data.cards;
    let newDeck = cards.concat(moreCards);
    this.setState({ cards: newDeck });
  }

  componentDidMount() {
    this.getDeck();
  }

  render() {
    const { cards } = this.state;
    return !cards.length ? (
      <h1>Loading Please Wait..........</h1>
    ) : (
      <div>
        <Slot deck={this.getDeck} draw={this.getRemainingCards} />
        <div className='cardslots'>
          <CardSlots />
        </div>
        <Deck cards={cards} />
      </div>
    );
  }
}
export default App;
