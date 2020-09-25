export const CHANGE_EXPERIMENT_STATE = 'CHANGE_EXPERIMENT_STATE';

// Action creators
// Thunks for changing experiment state
const changeExperimentStateActionCreator = {
    success: (experimentState) => {
        return {
            type: CHANGE_EXPERIMENT_STATE,
            experimentState: experimentState
        }
    },
}

/**
 * This action will change the navigation index
 */
export function changeExperimentState(experimentState) {
    return dispatch => {
        dispatch(changeExperimentStateActionCreator.success(experimentState));
    }
}
