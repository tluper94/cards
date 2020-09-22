import React, { Component } from 'react';
import Deck from '../components/Deck';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      shuffle: [],
      draw: [],
    };
  }

  async getDeck() {
    const urls = [
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
      'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2',
      'https://deckofcardsapi.com/api/deck/new/',
      'https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S',
    ];

    const resp = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
    const data = await resp.json();
    this.setState({ deck: data.deck_id });
  }

  componentDidMount() {
    this.getDeck();
  }

  render() {
    console.log('Deck', this.state.deck);
    return (
      <div>
        <Deck />
      </div>
    );
  }
}
export default App;
