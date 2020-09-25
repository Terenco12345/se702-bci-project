export const CHANGE_NAVIGATION_INDEX = 'CHANGE_NAVIGATION_INDEX';

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

/**
 * This action will change the navigation index
 */
export function changeNavigationIndex(index) {
    return dispatch => {
        dispatch(changeNavigationIndexActionCreator.success(index));
    }
}
