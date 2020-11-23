import { connect } from 'react-redux';
import { fetchUserCards, fetchCards } from '../../actions/card_actions';
import CardReview from './card_review';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    userCardIds: Object.values(state.entities.cards.userCards),
    allCards: Object.values(state.entities.cards.all),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserCards: userId => dispatch(fetchUserCards(userId)),
    fetchCards: () => dispatch(fetchCards()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CardReview);

