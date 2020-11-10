import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categories_actions';
import { fetchCards } from '../../actions/card_actions';
import CategoryShow from './category_show';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        category: state.entities.categories.data ? state.entities.categories.data : [],
        category_cards: Object.values(state.entities.cards.all)
    }
}

const MDTP = dispatch => {
    return {
        fetchCategory: (catId) => dispatch(fetchCategory(catId)),
        fetchCards: () => dispatch(fetchCards())
    }
}

export default withRouter(connect(MSTP, MDTP)(CategoryShow));