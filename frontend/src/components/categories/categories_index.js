import React from 'react';
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
           
                <div className="ui grid center aligned">
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
            <Button color={colors[(props.idx % colors.length)]} >{props.category.name}</Button>
        </div>
    )
}

export default CategoriesIndex