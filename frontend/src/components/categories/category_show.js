import React from 'react';
import CardBox from '../card/cardbox';
import CategoryIndexContainer from '../categories/categories_index_container';

class CategoryShow extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        // const catId = this.props.match.params.catId
        // this.props.fetchCategory(catId);
        if (this.props.allCards.length === 0) this.props.fetchCards();
        if (this.props.categories.length === 0) this.props.fetchCategories();
        this.props.fetchUserCards(this.props.currentUser.id);
    }

    render() {
        const { category, categoryIconName, categoryHeaderColor, allCards } = this.props;
        const catId = this.props.match.params.catId;
        // const categoryName = categories.length !== 0 ? categories.find((category) => category._id === catId).name : "";
        const categoryName = category.name || "";

        const correctCards = allCards.map(card => {
            if (card.category === catId) {
                return <CardBox
                    key={card._id}
                    card={card}
                />
            } else {
                return "";
            }
        })
        
        return (
            <div>
                <CategoryIndexContainer />
                {/* <h1 className={`ui centered header`}> Category: </h1> */}
                <h1 className={`ui centered header ${categoryHeaderColor}`}>
                    <i className={`${categoryIconName} icon`}></i>
                    {categoryName}
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