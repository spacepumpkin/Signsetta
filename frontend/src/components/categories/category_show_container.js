import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories_actions';
import { fetchCards, fetchUserCards } from '../../actions/card_actions';
import CategoryShow from './category_show';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        category: state.entities.categories.data ? state.entities.categories.data.find(cat => cat._id === ownProps.match.params.catId) : [],
        category_cards: Object.values(state.entities.cards.all)
    }
}

const MDTP = dispatch => {
    return {
        fetchUserCards: userId => dispatch(fetchUserCards(userId)),
        fetchCategories: (catId) => dispatch(fetchCategories(catId)),
        fetchCards: () => dispatch(fetchCards())
    }
}

export default withRouter(connect(MSTP, MDTP)(CategoryShow));

//.find(cat => cat.id === ownProps.match.params.catId)