import { 
    RECEIVE_CARDS,
    RECEIVE_CARD,
    RECEIVE_USER_CARDS,
    RECEIVE_CATEGORY_CARDS 
} from '../actions/card_actions';

const CardsReducer = (state = { all: {}, user: {}, userCards: [] }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CARDS:
            newState.all = action.cards.data;
            return newState;
        case RECEIVE_CARD:
            newState.user = action.cards.data;
            return newState;
        case RECEIVE_USER_CARDS:
            // debugger;
            newState.userCards = action.userCards.data;
            return newState;   
        case RECEIVE_CATEGORY_CARDS:
            newState.all = action.cards;
            return newState;   
        default:
            return state;
    }
};

export default CardsReducer;