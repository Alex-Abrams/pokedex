// ajax stuff to fetch pokeboys from backend
// fetchAllPokemon should make an ajax request that will make an http reuqest to our PokemonController#index

export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = id => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
);


export const createPokemon = (pokemon) => {
  pokemon.moves = Object.keys(pokemon.moves).map(k => pokemon.moves[k]);

  return $.ajax({
    method: 'POST',
    url: 'api/pokemon/',
    data: { pokemon }
  });
};
