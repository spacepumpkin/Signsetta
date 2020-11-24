import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categories_actions';
import { fetchCards, fetchUserCards } from '../../actions/card_actions';
import { fetchCategories } from '../../actions/categories_actions';
import CategoryShow from './category_show';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    let category = {};
    if (state.entities.categories.all.length !== 0) {
        category = state.entities.categories.all
        .find((category) => category._id === ownProps.match.params.catId);
    }
    
    let categoryIconName = "";
    let categoryHeaderColor = "";
    if (category.name) {
        switch (category.name) {
            case "Alphabet":
                categoryIconName = "language";
                categoryHeaderColor = "teal"
                break;
            case "Numbers":
                categoryIconName = "sort numeric down";
                categoryHeaderColor = "blue"
                break;
            case "Common Phrases":
                categoryIconName = "comments outline";
                categoryHeaderColor = "purple"
                break;
            default:
                break;
        }
    }

    return {
        currentUser: state.session.user,
        category: category,
        allCards: Object.values(state.entities.cards.all),
        categoryIconName: categoryIconName,
        categoryHeaderColor: categoryHeaderColor,
        categories: state.entities.categories.all
    };
};

const MDTP = dispatch => {
    return {
        fetchUserCards: userId => dispatch(fetchUserCards(userId)),
        fetchCategory: (catId) => dispatch(fetchCategory(catId)),
        fetchCards: () => dispatch(fetchCards()),
        fetchCategories: () => dispatch(fetchCategories())
    };
};

export default withRouter(connect(MSTP, MDTP)(CategoryShow));