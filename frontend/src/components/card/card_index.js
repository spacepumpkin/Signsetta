import React from 'react';
import { withRouter } from 'react-router-dom';
// import CategoryShow from '../categories/category_show';
import CardBox from './cardbox';

class CardIndex extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.fetchCards();
        this.props.fetchCategories();
    }
    // componentWillReceiveProps(newState) {
    //     this.setState({ cards: newState.cards });
    // }

    render() {
        // const categoryCards = this.props.categories.map(category => {
        //     <CategoryShow id={category._id} ></CategoryShow>
        // })
        // const alphId = this.props.categories[0].id
        const alphabetCards = this.props.cards.filter(card => card.category === "5f99fdf2027b164d2c011ed7");
        const numberCards = this.props.cards.filter(card => card.category === "5f9a0bd5027b164d2c011ed8");
        const phrasesCards = this.props.cards.filter(card => card.category === "5f9a0c0b027b164d2c011ed9");

        return (
            <div className="ui segment center aligned grid">
                <h2 className="ui header" style={{marginTop : "35px"}}>
                    All the Cards
                </h2>
                <div className="ui stacked segment">
                    <h1 className="ui header teal">
                        <i className="language icon"></i>
                        Alphabet
                    </h1>
                    <div className="ui centered cards">
                    {
                        alphabetCards.map(card => (
                            <CardBox
                                key={card._id}

                                card={card}
                            />))
                    }
                    </div>

                </div>
                {/* <div className="ui divider"></div> */}
                <div className="ui stacked segment">
                    <h1 className="ui header blue">
                        <i className="sort numeric down icon"></i>
                        Numbers
                    </h1>
                    <div className="ui centered cards">
                    {
                        numberCards.map(card => (
                            <CardBox
                                key={card._id}

                                card={card}
                            />))
                    }
                    </div>
                </div>
                <div className="ui stacked segment">
                    <h1 className="ui horizontal divider header purple">
                        <i className="comments outline icon"></i>
                        Common Phrases
                    </h1>
                    <div className="ui centered cards">
                    {
                        phrasesCards.map(card => (
                            <CardBox
                                key={card._id}

                                card={card}
                            />))
                    }
                    </div>
                </div>
            </div>
        );
    }
}



export default withRouter(CardIndex);