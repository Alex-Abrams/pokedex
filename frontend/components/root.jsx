// Root should be a stateless component (i.e. a functional component).
// It will be passed the app's Reduxstore as a prop.
// It should wrap our all of our app's components with the Provider from react-redux.

import React from 'react';

import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;
