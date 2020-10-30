import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import CategorySearch from './search';
import { fetchCategories } from '../../actions/categories_actions';

const mSTP= (state, ownProps) => {
    return{
        categories: state.entities.categories,
        category: state.entities.categories[ownProps.match.params.categoryId]
    }
}

const mDTP= (dispatch) => {
    return{
        fetchCategories: () => dispatch(fetchCategories()),
    };
};

export default withRouter(connect(mSTP, mDTP)(CategorySearch));