// presentional component
// should render an unoprdered list of pokemon names next to corresponding images
// Define and export a class, component that renders a <li> for each pokemon object in the this.props.pokemon array.
// Display the pokemon's name and a small image.

import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    const pokeList = pokemon.map(poke => (
      <li key={poke.id}>
        {poke.name}
        <img src={poke.image_url} alt={pokemon.name} />
      </li>
    )
  );
    return(
      <div>
        <ul className="Pokemon-List">
          { pokeList }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
