// We'll use combineReducers to generate our application state and assign each slice of the state to a different reducer.
import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import entities from './entities_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui
});

export default rootReducer;
