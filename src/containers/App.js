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
    const resp = await fetch('https://deckofcardsapi.com/api/deck/new/');
    const data = await resp.json();
    console.log(data);
  }

  componentDidMount() {
    this.getDeck();
  }

  render() {
    return (
      <div>
        <Deck />
      </div>
    );
  }
}
export default App;
