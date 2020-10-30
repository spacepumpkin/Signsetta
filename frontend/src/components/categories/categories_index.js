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
            <div className="ui inverted segment">
                <div className="ui inverted segment grid center aligned">
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
            </div>
        )
    }
}

const CategoryBox = props => { 
    const colors = ['red', 'yellow', 'olive', 'green', 'blue', 'violet', 'purple']
    
    return (
        <Button color={colors[(props.idx % colors.length)]} >{props.category.name}</Button>
    )
}

export default CategoriesIndex