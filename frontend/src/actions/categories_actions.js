import * as CategoriesUtil from '../util/categories_util';


export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';


export const recieveCategories = ( categories ) => {
    return {
       type: RECEIVE_CATEGORIES,
        categories  
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