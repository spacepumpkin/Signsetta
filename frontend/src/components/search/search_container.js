import { connect } from 'react-redux';
import Search from './search';
import { fetchCategories } from '../../actions/category_actions';

const mSTP= state => {

}

const mDTP= dispatch => {
    return{
        fetchCategories: () => dispatch(fetchCategories()),
    }
}

export default connect(mSTP, mDTP)(Search)