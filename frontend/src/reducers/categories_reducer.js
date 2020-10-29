import { RECEIVE_CATEGORIES } from '../actions/categories_actions';

const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_CATEGORIES:
            newState = action.categories
            return newState;
        default: 
            return state;
    }
}

export default CategoriesReducer;