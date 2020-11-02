import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/categories_actions';

const CategoriesReducer = (state = {}, action) => {
    
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_CATEGORIES:
            newState = action.categories
            return newState;
        case RECEIVE_CATEGORY:
            newState = action.category
            return newState    
        default: 
            return state;
    }
}

export default CategoriesReducer;