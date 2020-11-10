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

    }

    render() {
        const correctCards = this.props.category_cards.map(card => {
            if (card.category == this.props.match.params.catId) {
                return <CardBox
                    key={card._id}
                    card={card}
                />
            }
        })
        return (
            <div>
                <h1> This is the {this.props.category.name} category</h1>
                <div className="ui segment center aligned grid">
                    <h2 >These are all the cards</h2>

                    <div className="ui centered cards">

                        {correctCards}

                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryShow;