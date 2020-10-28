import { getCard, getUserCards } from '../util/cards_util';

export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_USER_CARDS = "RECEIVE_USER_CARDS";

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

