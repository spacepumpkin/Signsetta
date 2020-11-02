import { connect } from 'react-redux';
import FSGame from './fs_game';
import { fetchCards } from '../../actions/card_actions';

const mSP = (state) => ({
  cards: state.entities.cards.all
});

const mDP = (dispatch) => ({
  fetchCards: () => dispatch(fetchCards())
});

export default connect(mSP, mDP)(FSGame);