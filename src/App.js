import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import PokemonDisplay from './components/PokemonDisplay';
import './styles/App.css';

/***********************************************Set the states of the data for the pokemon to null**************/
class App extends React.Component {
  state = {
    name: null,
    type: null,
    type2: null,
    pic: null,
    pic2: null,
    id: null,
    isPicButtClicked: false
  };

  /*****************************************axios pull reuseable function for state updates************************/
  updatePull = (mon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${mon}`)
      .then((res) => {
        if (res.data.types.length > 1) {
          this.setState({
            name: res.data.name,
            type: res.data.types[0].type.name,
            type2: res.data.types[1].type.name,
            pic: res.data.sprites.front_default,
            pic2: res.data.sprites.back_default,
            id: res.data.id
          });
        } else {
          this.setState({
            name: res.data.name,
            type: res.data.types[0].type.name,
            type2: 'N/A',
            pic: res.data.sprites.front_default,
            pic2: res.data.sprites.back_default,
            id: res.data.id
          });
        }
      })
      .catch((err) => {
        this.setState({
          name: 'No Match',
          type: null,
          type2: null,
          pic: null,
          id: null
        });
        console.log('You don goofed');
      });
  };

  /**************Function to get pokemon data and update the state, passes as a prop to search from what the user typed in******/
  getPokemon = (e) => {
    e.preventDefault();
    const mon = e.target.pokemon.value;
    this.updatePull(mon);
  };
  /*******************************Use up button to move to next pokemon in object and update the information on the screen *******/
  increaseID = () => {
    const mon = this.state.id + 1;
    this.updatePull(mon);
  };
  /*******************************Use down button to move to pokemon before in object and update the information on the screen *******/
  decreaseID = () => {
    const mon = this.state.id - 1;
    this.updatePull(mon);
  };
  /***********************************Change to back view of pokemon on click ******************************************************/
  changePicturePokemon = (e) => {
    e.preventDefault();
    this.setState({
      isPicButtClicked: !this.state.isPicButtClicked
    });
  };
  /************************************************Render the pokemon data to the screen*****************************************/
  render() {
    return (
      <div className="main">
        <PokemonDisplay
          details={this.state}
          increaseID={this.increaseID}
          decreaseID={this.decreaseID}
          changePicturePokemon={this.changePicturePokemon}
        />
        <Search getPokemon={this.getPokemon} />
      </div>
    );
  }
}

export default App;
