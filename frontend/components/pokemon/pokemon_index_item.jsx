// render each individual pokemon item here
// Your PokemonIndexItem should return a li containing information on a pokemon's name and image_url.
//  This information should be served as props


import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li key={pokemon.id} className="pokemon-index-item">
    <Link to={`/pokemon/${pokemon.id}`}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </Link>
  </li>
);

export default PokemonIndexItem;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import PokemonDetailContainer from './pokemon_detail_container';
//
//
// class PokemonIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//
//   }
//
//   render() {
//     const { pokemon } = this.props;
//     const pokeList = pokemon.map(poke => (
//       <li key={poke.id}>
//         <Link to={`/pokemon/${pokemon.id}`}>
//           {poke.name}
//           <img src={poke.image_url} alt={poke.name} />
//         </Link>
//       </li>
//     )
//   );
//   return(
//     <div className="pokedex">
//       <ul>
//         {pokeList}
//       </ul>
//     </div>
//   );
//   }
// }
//
// export default PokemonIndexItem;
