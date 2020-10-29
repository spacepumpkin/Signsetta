// import { getCard, getUserCards } from '../util/cards_util';
import * as CardUtil from "../util/cards_util";


export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_USER_CARDS = "RECEIVE_USER_CARDS";

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