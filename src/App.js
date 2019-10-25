import React from 'react';
import axios from 'axios';
import Search from './components/Search';

class App extends React.Component {
  getPokemon = (e) => {
    e.preventDefault();
    const mon = e.target.pokemon.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${mon}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('You don goofed');
      });
  };

  render() {
    return (
      <div>
        <Search getPokemon={this.getPokemon} />
      </div>
    );
  }
}

export default App;
