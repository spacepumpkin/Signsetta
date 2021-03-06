import { connect } from 'react-redux';
import CategoriesIndex from './categories_index';
import { fetchCategories }from '../../actions/categories_actions';

const mapStateToProps = ({entities}) => {
    return {
        categories: entities.categories.all
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(fetchCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);