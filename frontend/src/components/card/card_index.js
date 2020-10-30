import React from 'react';
import { withRouter } from 'react-router-dom';
import CardBox from './cardbox';

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
        return (
        <div className="ui segment center aligned grid">
            <h2 >These are all the cards</h2>

            <div className="ui centered cards">
                
                {/* <div className="four column row"> */}
                    {
                        this.props.cards.map(card => (
                        <CardBox 
                            key={card._id} 
                            frontside={card.frontside} 
                            backside={card.backside} 
                            />))
                    }
                
            </div>
        </div>
        );
    }
}

    

export default withRouter(CardIndex);