import { combineReducers } from 'redux';
import navigation from './navigationReducers';
import experiment from './experimentReducers';
import time from './timeReducers';

export default combineReducers({
    navigation, experiment, time
});