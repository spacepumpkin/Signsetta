import * as CategoriesUtil from '../util/categories_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"


export const recieveCategories = ( categories ) => {
    return {
       type: RECEIVE_CATEGORIES,
        categories  
    }
}

export const receiveCategory = (category) => {
    return {
        type: RECEIVE_CATEGORY,
        category
    }
}

export const fetchCategories = () => {
    return dispatch => {
        return CategoriesUtil.getCategories()
            .then(categories => {
                return dispatch(recieveCategories(categories))
            })
            .catch(err => {
                return console.log(err)
            })
        }
}

export const fetchCategory = catId => {
    return dispatch => {
        return CategoriesUtil.getCategory(catId)
            .then(category => {
                return dispatch(receiveCategory(category))
            })
            .catch(err => {
                return console.log(err)
            })
    }
}