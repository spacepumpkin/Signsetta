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
        cards
    }
}

export const fetchCards = cards => {
    return dispatch => {
        return CardUtil.getCards(cards)
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

export const fetchUserCards = cardsId => {
    return dispatch => {
        return CardUtil.getUserCards(cardsId)
            .then(userCards => {
                return dispatch(receiveUserCards(userCards))
            })
    }
};