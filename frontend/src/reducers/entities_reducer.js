import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer';
// import categoriesReducer from './categories_reducer';


const entitiesReducer = combineReducers({
    cards: cardsReducer,
    // categories: categoriesReducer
});

export default entitiesReducer;