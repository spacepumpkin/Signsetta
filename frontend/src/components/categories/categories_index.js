import React,{ useEffect } from 'react';

const CategoriesIndex = props => {
    const { categories, getCategories } = props;

    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'blue', 'violet', 'purple']
    debugger
    
    return (
        <div className="ui inverted segment">
            <div className="ui massive inverted animated divided list horizontal">
                {
                    categories.map(category => {
                        return <CategoryBox 
                                    key={category.id} 
                                    category={category} 
                                    className={`ui ${colors[(category.id % colors.length)]} button`}/> //link to category showpage
                    })
                }
            </div>
        </div>
    )
}

const CategoryBox = props => {
    return (
        <h3 className="item">{props.category.name}</h3>
    )
}

export default CategoriesIndex