// //entry file
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import Root from './components/root';
// import { HashRouter, Route } from 'react-router-dom';
//
// //TODO testing
// import { receiveAllPokemon, requestAllPokemon, receiveSinglePokemon, requestSinglePokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
// import configureStore from './store/store';
// import {selectAllPokemon} from './reducers/selectors';
// // window.receiveAllPokemon = receiveAllPokemon;
// // window.fetchAllPokemon = fetchAllPokemon;
// // const store = configureStore();
// // window.store = store;
// // window.getState = store.getState;
// // window.dispatch = store.dispatch;
// // window.requestAllPokemon = requestAllPokemon;
// // window.selectAllPokemon = selectAllPokemon;
// // window.receiveSinglePokemon = receiveSinglePokemon;
// // window.fetchSinglePokemon = fetchSinglePokemon;
// //end testing
//
// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//   const rootEl = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, rootEl);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
