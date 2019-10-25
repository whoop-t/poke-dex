import React from 'react';
import axios from 'axios';
import Search from './components/Search';

//Set the states of the data for the pokemon to null
class App extends React.Component {
  state = {
    name: null,
    type: null,
    type2: null,
    pic: null,
    id: null
  };

  //Function to get pokemon data and update the state, passes as a prop to search from what the user typed in
  getPokemon = (e) => {
    e.preventDefault();
    const mon = e.target.pokemon.value;

    //Conditional to check if there is more than 1 type for the pokemon and update accordingly.
    //TODO Probably could use a refactor
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${mon}`)
      .then((res) => {
        if (res.data.types.length > 1) {
          this.setState({
            name: res.data.name,
            type: res.data.types[0].type.name,
            type2: res.data.types[1].type.name,
            pic: res.data.sprites.front_default,
            id: res.data.id
          });
        } else {
          this.setState({
            name: res.data.name,
            type: res.data.types[0].type.name,
            type2: null,
            pic: res.data.sprites.front_default,
            id: res.data.id
          });
        }
      })
      .catch((err) => {
        console.log('You don goofed');
      });
  };

  //Render the pokemon data to the screen
  render() {
    return (
      <div>
        <Search getPokemon={this.getPokemon} />
        <div>{this.state.name}</div>
        <div>{this.state.type}</div>
        <div>{this.state.type2}</div>
        <div>
          <img src={this.state.pic} alt="" />
        </div>
        <div>{this.state.id}</div>
      </div>
    );
  }
}

export default App;
