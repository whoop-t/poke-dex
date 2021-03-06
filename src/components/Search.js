import React from 'react';
import '../styles/Search.css';

//This component takes getPokemon prop and searches endpoint for user entered pokemon
const Search = (props) => {
  return (
    <div onSubmit={props.getPokemon} className="s_main">
      <form>
        <input type="text" name="pokemon" />
        <button>Submit</button>
      </form>
      <div style={{marginLeft: '10px'}}>Search by pokemon name or id #</div>
    </div>
  );
};

export default Search;
