import { connect } from 'react-redux';
import Translator from './translator';
import { fetchCards } from '../../actions/card_actions';

const mSP = (state) => ({
  cards: state.entities.cards.all
});

const mDP = (dispatch) => ({
  fetchCards: () => dispatch(fetchCards())
});

export default connect(mSP, mDP)(Translator);