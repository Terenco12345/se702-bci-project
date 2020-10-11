import {
    CHANGE_NAVIGATION_INDEX, CHANGE_QUESTION_INDEX,
} from './../actions/navigationActions';

// The initial state of the navigation state
const initialState = {
    // Changing index
    navigationIndex: 0,
    questionIndex: 0
}

// Navigation reducer
export default function navigation(state = initialState, action){
    switch(action.type){
        case CHANGE_NAVIGATION_INDEX:
            return {
                ...state, 
                navigationIndex: action.index, 
            }
        case CHANGE_QUESTION_INDEX:
            return {
                ...state,
                questionIndex: action.index
            }
        default:
            return state;
    }
}