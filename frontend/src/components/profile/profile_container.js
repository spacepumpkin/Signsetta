import { connect } from 'react-redux';
import { fetchUserCards, fetchCards, postCardsToUser, deleteCardsFromUser } from '../../actions/card_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    debugger;
    return {
        currentUser: state.session.user,
        cardIds: Object.values(state.entities.cards.userCards),
        cards: Object.values(state.entities.cards.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserCards: userId => dispatch(fetchUserCards(userId)),
        fetchCards: () => dispatch(fetchCards()),
        // addCards: (id, cards) => dispatch(postCardsToUser(id, cards)),
        // deleteCards: (id, cards) => dispatch(deleteCardsFromUser(id, cards))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

