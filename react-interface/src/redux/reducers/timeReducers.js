import { PUSH_TIME_EVENT } from './../actions/timeActions';
import { getCurrentTime } from './../../utils/TimeUtils';

// The initial state of the navigation state
const initialState = {
    events : []
}

// Navigation reducer
export default function time(state = initialState, action){
    switch(action.type){
        case PUSH_TIME_EVENT:
            var events = state.events;
            events.push({...action.event, time: getCurrentTime()});

            return {...state, events: events}
        default:
            return state;
    }
}