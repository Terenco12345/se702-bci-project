import {
    CHANGE_NAVIGATION_INDEX,
} from './../actions/navigationActions';

// The initial state of the navigation state
const initialState = {
    // Changing index
    navigationIndex: 0,
}

// Navigation reducer
export default function navigation(state = initialState, action){
    switch(action.type){
        case CHANGE_NAVIGATION_INDEX:
            return {
                ...state, 
                navigationIndex: action.index, 
            }
        default:
            return state;
    }
}