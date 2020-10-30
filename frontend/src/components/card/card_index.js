import React from 'react';
import { withRouter } from 'react-router-dom';
import CardBox from './cardbox';
import './card_index.css';
import '../../reset.css';

class CardIndex extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     cards: []
        // }
    }

    componentDidMount() {
        this.props.fetchCards()
    }
    // componentWillReceiveProps(newState) {
    //     this.setState({ cards: newState.cards });
    // }

    render() {
        // ;
        return (
            <div className="card-index">
                <h2 className="card-index-title">These are all the cards</h2>
                <ul className="card-index-cards">
                    {this.props.cards.map(card => (
                    <CardBox key={card._id} frontside={card.frontside} backside={card.backside}/>
                    ))} 
                </ul>
            </div>
        );
    }
}

    

export default withRouter(CardIndex);