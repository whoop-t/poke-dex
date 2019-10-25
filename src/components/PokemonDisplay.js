import React from 'react';
import '../styles/PokemonDisplay.css';

const PokemonDisplay = (props) => {
  return (
    <div className="pd_main">
      <div>{props.details.name}</div>
      <div>{props.details.type}</div>
      <div>{props.details.type2}</div>
      <div>
        <img src={props.details.pic} className="pd_img" />
      </div>
      <div>{props.details.id}</div>
    </div>
  );
};

export default PokemonDisplay;
