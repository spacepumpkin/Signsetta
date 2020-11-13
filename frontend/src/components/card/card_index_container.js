import CardIndex from './card_index';
import { fetchCards, fetchCard, fetchUserCards } from '../../actions/card_actions';
import { fetchCategories } from '../../actions/categories_actions';
import { connect } from 'react-redux';

const MSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        cards: Object.values(state.entities.cards.all),
        categories: Object.values(state.entities.categories)[0]
    };
};

const MDTP = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchCards: () => dispatch(fetchCards()),
        fetchCard: cardId => dispatch(fetchCard(cardId)),
        fetchUserCards: userId => dispatch(fetchUserCards(userId))
    };
};

export default connect(MSTP, MDTP)(CardIndex);