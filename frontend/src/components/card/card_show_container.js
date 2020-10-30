import { connect } from 'react-redux';
import CardShow from './card_show';
import { fetchCard } from '../../actions/card_actions';

const mSTP = (state, ownProps) => {
    return {
        card: state.entities.cards[ownProps.match.params.cardId],
        currentUser: state.session.id
    }
};

const mDTP = dispatch => ({
    fetchCard: cardId => dispatch(fetchCard(cardId))
});

export default connect(mSTP, mDTP)(CardShow);