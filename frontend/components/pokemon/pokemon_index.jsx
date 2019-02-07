// presentional component
// should render an unoprdered list of pokemon names next to corresponding images
// Define and export a class, component that renders a <li> for each pokemon object in the this.props.pokemon array.
// Display the pokemon's name and a small image.

import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;

    return(
      <div>
        <PokemonIndexItem pokemon={ pokemon } />
      </div>
    );
  }
}

export default PokemonIndex;
