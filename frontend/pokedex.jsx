import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//TODO testing
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
// const store = configureStore();
// window.store = store;
// window.getState = store.getState;
// window.dispatch = store.dispatch;

//end testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
