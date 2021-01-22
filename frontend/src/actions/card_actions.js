// import { getCard, getUserCards } from '../util/cards_util';
import * as CardUtil from "../util/cards_util";
import { addCardsToUser, deleteUserCards } from "../util/users_util";
// import { getCategoryCards } from '../util/categories_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_USER_CARDS = "RECEIVE_USER_CARDS";
export const RECEIVE_CATEGORY_CARDS = 'RECEIVE_CATEGORY_CARDS';

export const ADD_USER_CARD = 'ADD_USER_CARD';
export const DELETE_USER_CARD = 'DELETE_USER_CARD';

export const receiveCards = cards => {
    return {
        type: RECEIVE_CARDS,
        cards
    }
}

export const receiveCard = card => {
    return {
        type: RECEIVE_CARD,
        card
    }
}

export const receiveUserCards = userCards => {
    return {
        type: RECEIVE_USER_CARDS,
        userCards
    };
};

export const addUserCard = cardId => {
    return {
        type: ADD_USER_CARD,
        cardId
    };
};

export const deleteUserCard = cardId => {
    return {
        type: DELETE_USER_CARD,
        cardId
    }
}

// export const receiveNewUserCards = userCards => {
//     return {
//         type: RECEIVE_USER_CARDS,
//         userCards
//     };
// };

export const receiveCategoryCards = (cards) => {
    return {
        type: RECEIVE_CATEGORY_CARDS,
        cards
    }
}


// Thunk Actions

export const fetchCards = () => {
    return dispatch => {
        return CardUtil.getCards()
            .then(fetchedCards => {
                return dispatch(receiveCards(fetchedCards))
            }) 
    }
};

export const fetchCard = cardId => {
    return dispatch => {
        return CardUtil.getCard(cardId)
            .then(card => {
                return dispatch(receiveCard(card))
            })
    }
};

export const fetchUserCards = userId => {
    return dispatch => {
        return CardUtil.getUserCards(userId)
            .then(userCards => {
                return dispatch(receiveUserCards(userCards));
            });
    };
};

export const fetchCategoryCards = (catId) => {
    return dispatch => {
        return CardUtil.getCategoryCards(catId)
            .then(catCards => {
                return dispatch(receiveCategoryCards(catCards))
            })
    }
};

// Old Way
// export const postCardsToUser = (id, cards) => dispatch => {
//     // debugger;
//     return addCardsToUser(id, cards)
//         .then(userCards => {
//             return dispatch(receiveUserCards(userCards));
//         })
//         .catch(err => console.log(err));
// };

// New Way
export const postCardsToUser = (id, cards) => dispatch => {
    return addCardsToUser(id, cards)
        .then(() => {
            return dispatch(addUserCard(JSON.parse(cards)[0]));
        })
        .catch(err => console.log(err));
};

// Old Way
// export const deleteCardsFromUser = (id, cards) => dispatch => {
//     // debugger;
//     return deleteUserCards(id, cards) // ["card_id"]
//         .then((userCards) => {
//             console.log("usercards: ", userCards);
//             return dispatch(receiveUserCards(userCards));
//         })
//         .catch(err => console.log(err));
// };

// New Way
export const deleteCardsFromUser = (id, cards) => dispatch => {
    return deleteUserCards(id, cards) // ["card_id"]
        .then(() => {
            return dispatch(deleteUserCard(JSON.parse(cards)[0]));
        })
        .catch(err => console.log(err));
};
