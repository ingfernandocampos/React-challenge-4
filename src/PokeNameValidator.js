import React, { Component } from "react";
import pokemons from "./pokemons";

export default class PokeNameValidator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: pokemons[Math.floor(Math.random() * pokemons.length)],
      items: []
    };
  }

  onInputChange(name) {
    var actualName = this.state.currentName;
    if (name === actualName) {
      alert("Correct! Play again?");
      document.getElementById("fieldName").value = null;
      this.setState({
        currentName: pokemons[Math.floor(Math.random() * pokemons.length)]
      });
    }
  }
  /**
   * Component logic goes here
   */

  render() {
    return (
      <div className="app">
        <h2>Mini Challenge 4: Poke Name Validator</h2>
        <p>
          Pokémon name:&nbsp;
          <strong>
            <label id="fieldValue">
              {
                this.state.currentName
                /** random pokemon name should appear here */
              }
            </label>
          </strong>
        </p>
        <p className="secondary">Type the Pokémon name correctly:</p>
        <input
          id="fieldName"
          type="text"
          placeholder="Enter the Pokémon name"
          onChange={(e) => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}
