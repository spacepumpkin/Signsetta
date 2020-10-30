import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: undefined
};

export default function sessionReducer (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return initialState;
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

// ! What's the difference between isAuthenticated vs isSignedIn