import {
    CHANGE_NAVIGATION_INDEX_PENDING,
    CHANGE_NAVIGATION_INDEX_SUCCESS, 
    CHANGE_NAVIGATION_INDEX_ERROR 
} from './../actions/navigationActions';

// The initial state of the navigation state
const initialState = {
    // Changing index
    navigationIndexPending: false,
    navigationIndex: 0,
    navigationIndexError: null,
}

// The initial state of all errors of the navigation state
const resetErrors = {
    navigationIndexError: null
}

// Navigation reducer
export default function navigation(state = initialState, action){
    switch(action.type){
        // Action of changing index is pending...
        case CHANGE_NAVIGATION_INDEX_PENDING:
            return {...state, 
                navigationIndex: action.index,
                navigationIndexPending: true 
            }
        // Action of changing index had an error!
        case CHANGE_NAVIGATION_INDEX_ERROR:
            return {
                ...state, 
                navigationIndex: action.index,
                navigationIndexPending: false,
                navigationIndexError: action.error
            }
        // Action of changing index was successful!
        case CHANGE_NAVIGATION_INDEX_SUCCESS:
            return {
                ...state, 
                navigationIndex: action.index, 
                navigationIndexPending: false, 
                ...resetErrors 
            }
        default:
            return state;
    }
}