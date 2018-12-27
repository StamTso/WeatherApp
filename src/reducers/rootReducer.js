import { combineReducers } from 'redux';
import {weatherReducer,pinDataReducer}  from './index'

export default combineReducers({
    weatherReducer,
    pinDataReducer
   });