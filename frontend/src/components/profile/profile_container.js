import { connect } from 'react-redux';
import { fetchUserCards, fetchCards } from '../../actions/card_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
   
    return {
        currentUser: state.session.user,
        cardIds: Object.values(state.entities.cards.user_cards),
        cards: Object.values(state.entities.cards.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserCards: userId => dispatch(fetchUserCards(userId)),
        fetchCards: () => dispatch(fetchCards())
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

