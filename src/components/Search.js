import React from 'react';

//This component takes getPokemon prop and searches endpoint for user entered pokemon
const Search = (props) => {
  return (
    <div onSubmit={props.getPokemon}>
      <form>
        <input type="text" name="pokemon" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
