import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function sessionReducer (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return initialState;
        case RECEIVE_USER_SIGN_IN:
            // debugger
            return {
                ...state,
                isAuthenticated: true
                // user: action.currentUser
            }
        default:
            // debugger
            return state;
    }
}

// ! What's the difference between isAuthenticated vs isSignedIn