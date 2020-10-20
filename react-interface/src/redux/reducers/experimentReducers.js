import { CHANGE_EXPERIMENT_STATE } from './../actions/experimentActions';
import { SURVEY_QUESTIONS } from './../../utils/QuestionUtils';

// The initial state of the experiment state
const initialState = {
    participantId: '',
    email: '',
    // Group - 'control' or 'meditation'
    group: '',
    answers: [],
    surveyAnswers: new Array(SURVEY_QUESTIONS.length).fill("")
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