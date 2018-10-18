import { combineReducers } from 'redux';

import Logic from './reducer_logic';

// everything inside is a piece of state
const rootReducer = combineReducers({
  logic: Logic
});

export default rootReducer;
