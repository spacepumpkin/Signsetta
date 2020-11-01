import React from 'react';
import CardBox from '../card/cardbox';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const catId = this.props.match.params.catId
        this.props.fetchCategory(catId);
        this.props.fetchCards()
        // this.props.fetchCategoryCards(catId);
        // debugger;
    }

    render() {
        // debugger;
        const correctCards = this.props.category_cards.map(card => {
            // debugger;
            if (card.category == this.props.match.params.catId) {
                // debugger;
                return <CardBox
                    key={card._id}
                    frontside={card.frontside}
                    backside={card.backside}
                />
            }
        })
        // debugger;
        return (
            <div>
                <h1> This is the {this.props.category.name} category</h1>
                <div className="ui segment center aligned grid">
                    <h2 >These are all the cards</h2>

                    <div className="ui centered cards">

                        {/* <div className="four column row"> */}
                        {correctCards}

                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryShow;