import * as CategoriesUtil from '../util/categories_util';

export const RECEIVE_CATEGORY_CARDS = 'RECEIVE_CATEGORY_CARDS';

export const receiveCategoryCards = (cards) => {
    return {
        type: RECEIVE_CATEGORY_CARDS,
        cards
    }
}

export const fetchCategoryCards = (cards) => {
    return dispatch => {
        return CategoriesUtil.getCategoryCards(cards)
            .then(catCards => {
                return dispatch(receiveCategoryCards(catCards))
            })
    }
};