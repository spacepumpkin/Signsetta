import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categories_actions';
import CategoryShow from './category_show';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        category: state.entities.categories
    }
}

const MDTP = dispatch => {
    return {
        fetchCategory: (catId) => dispatch(fetchCategory(catId))
    }
}

export default withRouter(connect(MSTP, MDTP)(CategoryShow));