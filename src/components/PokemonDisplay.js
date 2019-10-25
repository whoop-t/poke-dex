import React from 'react';
import '../styles/PokemonDisplay.css';

const PokemonDisplay = (props) => {
  return (
    <div className="pd_main">
      <div id="pokedex">
        <div id="left">
          <div id="top-left"></div>
          <div id="top-left1">
            <div id="glass-button">
              <div id="reflect"></div>
            </div>
            <div id="top-buttons">
              <div id="top-button-red"></div>
              <div id="top-button-yellow"></div>
              <div id="top-button-green"></div>
            </div>
          </div>
          <div id="top-left2"></div>
          <div id="logo"></div>
          <div id="border-screen">
            <div id="button-top1"></div>
            <div id="button-top2"></div>
            <div id="button-bottom" onClick={props.changePicturePokemon}></div>
            <p className="selectDisable">&equiv;&equiv;</p>
          </div>
          <div id="screen">
            <img
              className={`${
                props.details.isPicButtClicked ? 'selectDisable' : ''
              }`}
              src={props.details.pic}
            />
            <img
              className={`${
                !props.details.isPicButtClicked ? 'selectDisable' : ''
              }`}
              src={props.details.pic2}
            />
          </div>
          <div id="triangle"></div>
          <div id="blue-button-left"></div>
          <div id="green-button-left"></div>
          <div id="orange-button-left"></div>
          <div id="square-button-left">Id: {props.details.id}</div>
          <div id="cross">
            <div id="mid-cross">
              <div id="mid-circle"></div>
            </div>
            <div id="top-cross" onClick={props.increaseID}>
              <div id="upC"></div>
            </div>
            <div id="right-cross">
              <div id="rightC"></div>
            </div>
            <div id="bot-cross" onClick={props.decreaseID}>
              <div id="downC"></div>
            </div>
            <div id="left-cross">
              <div id="leftC"></div>
            </div>
          </div>
        </div>
        <div id="middle">
          <div id="hinge1"></div>
          <div id="hinge2"></div>
          <div id="hinge3"></div>
        </div>
        <div id="right">
          <div id="info-screen">{props.details.name}</div>
          <div id="keyboard">
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
          <div id="leaf-button-right"></div>
          <div id="yellow-button-right"></div>
          <div id="green-button-right"></div>
          <div id="orange-button-right"></div>
          <div id="left-cross-button">
            <div id="leftT"></div>
          </div>
          <div id="right-cross-button">
            <div id="rightT"></div>
          </div>
          <div id="cross-button">
            <div id="left-red-cross"></div>
          </div>
          <div id="square-button-right1">{props.details.type2}</div>
          <div id="square-button-right2">{props.details.type}</div>
        </div>
        <div id="top-right1"></div>
        <div id="top-right2"></div>
      </div>
    </div>
  );
};

export default PokemonDisplay;
