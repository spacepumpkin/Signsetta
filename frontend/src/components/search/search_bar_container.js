import { connect } from 'react-redux';
import CategorySearch from './search_bar';
import { fetchCategories } from '../../actions/categories_actions';
import {fetchCards} from '../../actions/card_actions'

const mSTP= (state, ownProps) => {
    // debugger
    return{
        categories: state.entities.categories,
        // category: state.entities.categories[ownProps.match.params.categoryId]
        cards: state.entities.cards.all
    }
}

const mDTP= (dispatch) => {
    return{
        fetchCategories: () => dispatch(fetchCategories()),
        fetchCards: () => dispatch(fetchCards())
    };
};

export default connect(mSTP, mDTP)(CategorySearch);