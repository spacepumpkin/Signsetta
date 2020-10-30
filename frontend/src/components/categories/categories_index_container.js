import { connect } from 'react-redux';
import CategoriesIndex from './categories_index';
import { fetchCategories }from '../../actions/categories_actions';

const mapStateToProps = ({entities}) => {
    debugger
    return {
        categories: (entities.categories.data )? (Object.values(entities.categories.data)) : []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(fetchCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);