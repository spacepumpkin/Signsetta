import { RECEIVE_CATEGORIES } from '../actions/categories_actions';

const CategoriesReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_CATEGORIES:
            newState = action.categories
            return newState;
        default: 
            return state;
    }
}

export default CategoriesReducer;