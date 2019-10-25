import React from 'react';

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
