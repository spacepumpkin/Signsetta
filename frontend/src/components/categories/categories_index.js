import React,{ useEffect } from 'react';

const CategoriesIndex = props => {
    const { categories, getCategories } = props;

    
    return (
        <div className="ui inverted segment">
            <div className="ui massive inverted animated divided list horizontal">
                {
                    props.categories.map(category => {
                        return <CategoryBox key={category.id} category={category}/> //link to category showpage
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