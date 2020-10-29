import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer';
import categoriesReducer from './categories_reducer';
import usersReducer from './users_reducer'



const entitiesReducer = combineReducers({
    cards: cardsReducer,
    categories: categoriesReducer,
    users: usersReducer
});

export default entitiesReducer;