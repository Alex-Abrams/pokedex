// presentional component
// should render an unoprdered list of pokemon names next to corresponding images
// Define and export a class, component that renders a <li> for each pokemon object in the this.props.pokemon array.
// Display the pokemon's name and a small image.

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;


    return (
      <section className="pokedex">
        <Route
          path="/pokemon/:pokemonId"
          component={PokemonDetailContainer}
        />
        <ul>
          {pokemon.map((poke, index) => <PokemonIndexItem key={index} pokemon={poke} />)}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
