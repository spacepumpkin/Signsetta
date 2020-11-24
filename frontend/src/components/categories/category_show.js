import React from 'react';
import CardBox from '../card/cardbox';
import CategoryIndexContainer from '../categories/categories_index_container';

class CategoryShow extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        const catId = this.props.match.params.catId
        this.props.fetchCategory(catId);
        this.props.fetchCards();
        this.props.fetchCategories();
        this.props.fetchUserCards(this.props.currentUser.id);
    }

    render() {
        const correctCards = this.props.category_cards.map(card => {
            if (card.category === this.props.match.params.catId) {
                return <CardBox
                    key={card._id}
                    card={card}
                />
            } else {
                return "";
            }
        })
        
        const { categoryIconName, categoryHeaderColor } = this.props;

        return (
            <div>
                <CategoryIndexContainer />
                <h2 className={`ui centered header`}> Category: </h2>
                <h1 className={`ui centered header ${categoryHeaderColor}`}>
                    <i className={`${categoryIconName} icon`}></i>
                    {this.props.category.name}
                </h1>
                <div className="ui segment center aligned grid">

                    <div className="ui centered cards">

                        {correctCards}

                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryShow;