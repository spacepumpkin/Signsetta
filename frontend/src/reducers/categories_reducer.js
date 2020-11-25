import { RECEIVE_CATEGORIES } from '../actions/categories_actions';

const CategoriesReducer = (state = {all: []}, action) => {
    
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_CATEGORIES:
            newState.all = Object.values(action.categories.data);
            return newState;
        // case RECEIVE_CATEGORY:
        //     newState.current = action.category.data
        //     return newState    
        default: 
            return state;
    }
}

export default CategoriesReducer;