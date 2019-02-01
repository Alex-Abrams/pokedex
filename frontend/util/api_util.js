// ajax stuff to fetch pokeboys from backend
// fetchAllPokemon should make an ajax request that will make an http reuqest to our PokemonController#index

export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: './api/pokemon'
  })
);
