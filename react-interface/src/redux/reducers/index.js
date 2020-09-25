import { combineReducers } from 'redux';
import navigation from './navigationReducers';
import experiment from './experimentReducers';

export default combineReducers({
    navigation, experiment
});