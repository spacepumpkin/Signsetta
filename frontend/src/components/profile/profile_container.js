
import { connect } from 'react-redux';
import { fetchUserCards } from '../../actions/card_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        cards: Object.values(state.entities.cards),
        currentUser: state.session.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserCards: userId => dispatch(fetchUserCards(userId))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

