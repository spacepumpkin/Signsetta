import { getAllUsers, addCardsToUser } from "../util/users_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECIEVE_CARDS = "RECIEVE_CARDS";

export const receiveUsers = users => {
    return ({
        type: RECEIVE_USERS,
        users
    })
}

export const receiveErrors = errors => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
};



export const fetchUsers = () => dispatch =>
    getAllUsers()
        .then(users => dispatch(receiveUsers(users)))
        .catch(err => dispatch(receiveErrors(err)));


export const postCardsToUser = (id, cards) => dispatch => {
    
   return addCardsToUser(id, cards)
        .catch(err => console.log(err))
    }

    
