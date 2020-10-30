import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categories_actions';
import { fetchCategoryCards } from '../../actions/card_actions'
import CategoryShow from './category_show';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    debugger;
    return {
        category: state.entities.categories.data ? state.entities.categories.data : [],
        category_cards: Object.values(state.entities.cards.all)
    }
}

const MDTP = dispatch => {
    return {
        fetchCategory: (catId) => dispatch(fetchCategory(catId)),
        fetchCategoryCards: (cateId) => dispatch(fetchCategoryCards(cateId))
    }
}

export default withRouter(connect(MSTP, MDTP)(CategoryShow));