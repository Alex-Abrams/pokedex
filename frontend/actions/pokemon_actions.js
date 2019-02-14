import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';
export const CREATE_POKEMON = 'CREATE_POKEMON';

// This action object should have two keys: type of RECEIVE_ALL_POKEMON
//  and another for the received pokemon data.

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = payload => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload
});

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});


// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);

// thunk async
// thunk action creators
export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => {dispatch(receiveAllPokemon(pokemon))});
}

export const requestSinglePokemon = id => dispatch => (
  APIUtil.fetchSinglePokemon(id)
  .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);

export const createPokemon = pokemon => dispatch => (
  APIUtil.createPokemon(pokemon).then(pokemon => {
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  }).fail(err => dispatch(receivePokemonErrors(err.responseJSON)))
);
