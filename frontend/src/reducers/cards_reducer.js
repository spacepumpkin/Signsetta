import { RECEIVE_CARDS, RECEIVE_CARD, RECEIVE_USER_CARDS} from '../actions/card_actions';

const CardsReducer = (state = { all: {}, user: {}, user_cards: {} }, action) => {
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
            newState.user_cards = actions.cards.data
            return newState;      
        default:
            return state;
    }
};

export default CardsReducer;