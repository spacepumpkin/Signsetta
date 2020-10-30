import { connect } from 'react-redux';
import { fetchUserCards } from '../../actions/card_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    debugger;
    return {
        currentUser: state.session.user,
        cards: Object.values(state.entities.cards.user_cards)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserCards: userId => dispatch(fetchUserCards(userId))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

