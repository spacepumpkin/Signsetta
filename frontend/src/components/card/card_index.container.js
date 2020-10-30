import CardIndex from './card_index'
import { fetchCards, fetchCard } from '../../actions/card_actions'
import { connect } from 'react-redux';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        cards: Object.values(state.entities.cards.all)
    };
};

const MDTP = dispatch => {
    return {
        fetchCards:  () => dispatch(fetchCards()),
        fetchCard: cardId => dispatch(fetchCard(cardId))
    };
};

export default connect(MSTP, MDTP)(CardIndex);