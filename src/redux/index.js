import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  dog: reducer,
});

export default rootReducer;