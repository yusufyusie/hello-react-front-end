import { combineReducers } from 'redux';
import greetingReducer from './greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
