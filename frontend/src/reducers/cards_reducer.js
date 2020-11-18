import { 
    RECEIVE_CARDS,
    RECEIVE_CARD,
    RECEIVE_USER_CARDS,
    RECEIVE_CATEGORY_CARDS,
    DELETE_USER_CARD,
    ADD_USER_CARD
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
            newState.userCards = action.userCards !== undefined ? action.userCards.data : [];
            return newState;   
        case DELETE_USER_CARD:
            // console.log(newState.userCards.includes(action.cardId)); // expect true
            delete newState.userCards[newState.userCards.indexOf(action.cardId)]
            return newState;
        case ADD_USER_CARD:
            // console.log(newState.userCards.includes(action.cardId)); // expect false
            newState.userCards.push(action.cardId)
            return newState;
        case RECEIVE_CATEGORY_CARDS:
            newState.all = action.cards;
            return newState;   
        default:
            return state;
    }
};

export default CardsReducer;