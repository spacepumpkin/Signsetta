import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categories_actions';
import { fetchCards, fetchUserCards } from '../../actions/card_actions';
import { fetchCategories } from '../../actions/categories_actions';
import CategoryShow from './category_show';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    
    let categoryIconName = "";
    let categoryHeaderColor = "";
    if (state.entities.categories.data) {
        switch (state.entities.categories.data.name) {
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
        category: state.entities.categories.data ? state.entities.categories.data : [],
        category_cards: Object.values(state.entities.cards.all),
        categoryIconName: categoryIconName,
        categoryHeaderColor: categoryHeaderColor,
        categories: Object.values(state.entities.categories)[0]
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