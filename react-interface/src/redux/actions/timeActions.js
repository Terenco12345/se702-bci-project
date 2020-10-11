export const PUSH_TIME_EVENT = 'PUSH_TIME_EVENT';

// Action creators
// Thunks for pushing events
const pushTimeEventActionCreator = {
    success: (event) => {
        return {
            type: PUSH_TIME_EVENT,
            event: event
        }
    },
}

/**
 * This action will push an event to the state
 */
export function pushTimeEvent(event) {
    return dispatch => {
        dispatch(pushTimeEventActionCreator.success(event));
    }
}
