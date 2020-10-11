export const CHANGE_NAVIGATION_INDEX = 'CHANGE_NAVIGATION_INDEX';
export const CHANGE_QUESTION_INDEX = 'CHANGE_QUESTION_INDEX';

// Action creators
// Thunks for changeNavigationIndex
const changeNavigationIndexActionCreator = {
    success: (index) => {
        return {
            type: CHANGE_NAVIGATION_INDEX,
            index: index
        }
    },
}
// Thunks for changeQuestionIndex
const changeQuestionIndexActionCreator = {
    success: (index) => {
        return {
            type: CHANGE_QUESTION_INDEX,
            index: index
        }
    }
}

/**
 * This action will change the navigation index
 */
export function changeNavigationIndex(index) {
    return dispatch => {
        dispatch(changeNavigationIndexActionCreator.success(index));
    }
}

/**
 * This action will change the question index
 */
export function changeQuestionIndex(index) {
    return dispatch => {
        dispatch(changeQuestionIndexActionCreator.success(index));
    }
}
