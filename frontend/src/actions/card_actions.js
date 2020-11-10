// import { getCard, getUserCards } from '../util/cards_util';
import * as CardUtil from "../util/cards_util";
// import { getCategoryCards } from '../util/categories_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_USER_CARDS = "RECEIVE_USER_CARDS";
export const RECEIVE_CATEGORY_CARDS = 'RECEIVE_CATEGORY_CARDS';

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
    }
}

export const receiveCategoryCards = (cards) => {
    return {
        type: RECEIVE_CATEGORY_CARDS,
        cards
    }
}

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
                return dispatch(receiveUserCards(userCards))

            })
    }
};

export const fetchCategoryCards = (catId) => {
    return dispatch => {
        return CardUtil.getCategoryCards(catId)
            .then(catCards => {
                return dispatch(receiveCategoryCards(catCards))
            })
    }
};