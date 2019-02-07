// render each individual pokemon item here
// Your PokemonIndexItem should return a li containing information on a pokemon's name and image_url.
//  This information should be served as props

import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { pokemon } = this.props;
    const pokeList = pokemon.map(poke => (
      <li key={poke.id}>
        <Link to="/pokemon/:pokemonId">
          {poke.name}
          <img src={poke.image_url} alt={poke.name} />
        </Link>
      </li>
    )
  );
  return(
    <div className="pokedex">
      <ul>
        {pokeList}
      </ul>
    </div>
  );
  }
}

export default PokemonIndexItem;
