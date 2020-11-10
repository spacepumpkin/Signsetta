import React from 'react';
import { withRouter } from 'react-router-dom';
import CategoryShow from '../categories/category_show';
import CardBox from './cardbox';

class CardIndex extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     cards: []
        // }
    }

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
            <h2 >These are all the cards</h2>

            <div className="ui centered cards"> Alphabet
                
                    {
                        alphabetCards.map(card => (
                        <CardBox 
                            key={card._id} 
                          
                            card={card}
                            />))
                    }
                
            </div>
                <div className="ui centered cards"> Numbers

                    {
                        numberCards.map(card => (
                            <CardBox
                                key={card._id}

                                card={card}
                            />))
                    }

                </div>
                <div className="ui centered cards"> Common Phrases

                    {
                        phrasesCards.map(card => (
                            <CardBox
                                key={card._id}

                                card={card}
                            />))
                    }

                </div>
        </div>
        );
    }
}

    

export default withRouter(CardIndex);