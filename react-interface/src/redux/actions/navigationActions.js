export const CHANGE_NAVIGATION_INDEX_PENDING = 'CHANGE_NAVIGATION_INDEX';
export const CHANGE_NAVIGATION_INDEX_SUCCESS = 'CHANGE_NAVIGATION_INDEX';
export const CHANGE_NAVIGATION_INDEX_ERROR = 'CHANGE_NAVIGATION_INDEX';

// Action creators
// Thunks for fetchCurrentUser
const changeNavigationIndexActionCreator = {
    pending: () => {
        return {
            type: CHANGE_NAVIGATION_INDEX_PENDING,
        }
    },
    success: (index) => {
        return {
            type: CHANGE_NAVIGATION_INDEX_SUCCESS,
            index: index
        }
    },
    error: (error) => {
        return {
            type: CHANGE_NAVIGATION_INDEX_ERROR,
            error: error
        }
    }
}

/**
 * This action will change the navigation index
 */
export function changeNavigationIndex(index) {
    return dispatch => {
        dispatch(changeNavigationIndexActionCreator.pending());
        try{
            dispatch(changeNavigationIndexActionCreator.success(index));
        } catch(err) {
            dispatch(changeNavigationIndexActionCreator.error(err));
        }
    }
}
