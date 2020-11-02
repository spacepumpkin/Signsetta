import React from 'react';
import { Link } from 'react-router-dom';
import './categories_index.css';
import {Button} from 'semantic-ui-react';


class CategoriesIndex extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getCategories();
    }


    render(){
        
        const { categories, getCategories } = this.props;
        
    
        return (
           
                <div className="ui grid segment center aligned">
                    {
                        categories.map((category,idx) => {
                           
                            return <CategoryBox 
                                        key={category.id} 
                                        category={category} 
                                        idx={idx}
                                        
                                    />
                        })
                    }
                </div>
        )
    }
}

const CategoryBox = props => { 
    const colors = [  'teal',  'violet', 'pink', 'yellow', 'green', 'blue']
    
    return (
        <div className="doubling three wide column">
            
                <Link className={`ui button ${colors[(props.idx % colors.length)]}`}to={`/categories/${props.category._id}`}>
                    {props.category.name}
                </Link>

        </div>
    )
}

export default CategoriesIndex