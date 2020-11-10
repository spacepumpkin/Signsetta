import CardIndex from './card_index';
import { fetchCards, fetchCard } from '../../actions/card_actions';
import { fetchCategories } from '../../actions/categories_actions';
import { connect } from 'react-redux';

const MSTP = (state, ownProps) => {
    return {
        cards: Object.values(state.entities.cards.all),
        categories: Object.values(state.entities.categories)[0]
    };
};

const MDTP = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchCards: () => dispatch(fetchCards()),
        fetchCard: cardId => dispatch(fetchCard(cardId))
    };
};

export default connect(MSTP, MDTP)(CardIndex);