import { CHANGE_EXPERIMENT_STATE } from './../actions/experimentActions';

// The initial state of the experiment state
const initialState = {
    participantId: '',
    email: '',
    // Group - 'control' or 'meditation'
    group: '',
    answers: []
}

// experiment reducer
export default function experiment(state = initialState, action){
    switch(action.type){
        case CHANGE_EXPERIMENT_STATE:
            return {
                ...state, 
                ...action.experimentState, 
            }
        default:
            return state;
    }
}