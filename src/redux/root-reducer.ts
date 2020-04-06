import homeReducer from './home/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  home: homeReducer,
});
