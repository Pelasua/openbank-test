import { combineReducers } from 'redux';
import {buttonClickReducer} from './Button';

const reducers = combineReducers({
    button: buttonClickReducer
  });

export default reducers;