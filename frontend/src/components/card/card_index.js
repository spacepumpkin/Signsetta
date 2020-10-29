import React from 'react';
import { withRouter } from 'react-router-dom'
import CardBox from './cardbox'

class CardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCards()
    }


    render() {
        return (
            <div>
                <h2>These are all the cards</h2>
                {this.state.cards.map(card => (
                    <CardBox key={card.id} frontside={card.frontside} backside={card.backside}/>
                ))} 
            </div>
        );
    }
}

    

export default withRouter(CardIndex);