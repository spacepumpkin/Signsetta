import React from 'react';
import CardBox from '../card/cardbox';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const catId = this.props.match.params.catId
        this.props.fetchCategory(catId);
        this.props.fetchCategoryCards(catId);
        // debugger;
    }

    render() {
        // debugger;
        return (
            <div>
                <h1> This is the {this.props.category.name} category</h1>
                {/* <ul>
                    {this.props.cards.category_cards.map(card => (
                        <CardBox key={card._id} frontside={card.frontside} backside={card.backside} />
                    ))} 
                </ul> */}
            </div>
        )
    }
}

export default CategoryShow;