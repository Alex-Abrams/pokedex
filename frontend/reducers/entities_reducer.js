import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemon from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
});

export default entitiesReducer;
