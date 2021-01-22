import { connect } from 'react-redux';
import CategorySearch from './search_bar';
import { fetchCategories } from '../../actions/categories_actions';
import {fetchCards} from '../../actions/card_actions'

const mSTP= (state, ownProps) => {
    return{
        categories: state.entities.categories,
        cards: state.entities.cards.all,
        loggedIn: state.session.isAuthenticated
    }
}

const mDTP= (dispatch) => {
    return{
        fetchCategories: () => dispatch(fetchCategories()),
        fetchCards: () => dispatch(fetchCards())
    };
};

export default connect(mSTP, mDTP)(CategorySearch);