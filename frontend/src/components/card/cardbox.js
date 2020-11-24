import React from 'react';
import { postCardsToUser, deleteCardsFromUser } from '../../actions/card_actions';
import { Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './cardbox.css';


//this is an addition made to help with the creation of card indexes in the future
export const CardBoxIndex = props => {

    return (
        <div className="ui segment center aligned grid">
            <div className="ui centered cards">

                {
                    props.cards.map(card => (
                        <CardBox
                            key={card._id}
                            card={card}
                        />))
                }
            </div>
        </div>
    );
}

// CardBox is the main export of the file; container is in the same file
class CardBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flip: true,
            animation: true
        }
        
        // debugger;
        this.addToUserCards = this.addToUserCards.bind(this);
        this.deleteUserCards = this.deleteUserCards.bind(this);
        this.handleLoad = this.handleLoad.bind(this);

    }
   
    flipAll = () => {

        return (this.setState({ animation: !this.state.animation }),
            setTimeout(() => this.setState({ flip: !this.state.flip }), 400))
    }



    addToUserCards = (e) => {
        e.stopPropagation()
        if (e.target.className === "ui bottom attached button") { 
            // console.log("adding card id: ", JSON.stringify([this.props.card._id]));
            this.props.addCards(this.props.currentUser.id, JSON.stringify([this.props.card._id]));
        }
        // this.setState(this.state);
    }

    deleteUserCards = (e) => {
        e.stopPropagation()
        if (e.target.className === "ui bottom attached button") {
            // console.log("deleting card id: ", JSON.stringify([this.props.card._id]));
            this.props.deleteCards(this.props.currentUser.id, JSON.stringify([this.props.card._id]));
        }
    }

    
    handleLoad() {
        this.setState({ loaded: true });
    }


    render() {
        let user = this.props.currentUser;
        let addButton = (<div className="ui bottom attached button" onClick={this.addToUserCards} >
            <i className="add icon"></i>
                                            Add To Your Cards
        </div>
        );

        let deleteButton = (<div className="ui bottom attached button" onClick={this.deleteUserCards} >
            <i className="minus icon"></i>
                                            Delete From Your Cards
        </div>
        );
        let cardButton = this.props.hasCard ? deleteButton : addButton;
        return (

            <Transition
                visible={this.state.animation}
                animation='horizontal flip'
                duration={400}
                onHide={() => this.setState({ animation: !this.state.animation })}>
                <div className="ui teal card" 
                     style={{backgroundColor: '#000000', color: "white", textAlign: 'center'}} 
                     onClick={() => this.flipAll()} >
                    {
                        (this.state.flip) ? (
                            <div>
                                <div className={`ui centered loader ${this.state.loaded ? '' : 'active'}`} ></div>
                                <img 
                                className="ui centered rounded image" 
                                src={this.props.card.frontside} 
                                height="150" 
                                onLoad={this.handleLoad}
                                alt="card"/>

                                {
                                // Check if currentUser exists; if so, render the Add Card button
                                (
                                    (Object.prototype.toString.call(user) === "[object Object]") && (Object.keys(user).length !== 0)
                                    &&
                                    cardButton
                                )}
                            </div>

                        ) : (
                                <div>
                                    <div className="card-backside" style={{ height: "150px" }}>
                                        {this.props.card.backside}
                                        </div>
                                    {(
                                        (Object.prototype.toString.call(user) === "[object Object]") && (Object.keys(user).length !== 0)
                                        &&
                                        (cardButton
                                        )
                                    )}
                                </div>
                            )
                    }

                </div>
            </Transition>

        );
    }
}
const mSP = (state, ownProps) => {
    
    return {
        currentUser: state.session.user,
        hasCard: state.entities.cards.userCards.includes(ownProps.card._id)
    }
}
const mDP = dispatch => {
    return {
        addCards: (id, cards) => dispatch(postCardsToUser(id, cards)),
        deleteCards: (id, card) => dispatch(deleteCardsFromUser(id, card))
    }
}

export default connect(mSP, mDP)(CardBox);

// const CardBox = props => {
//     const [flip, setFlip] = React.useState(true)
//     return (
//         <li className="cardbox-card" onClick={() => setFlip(!flip)}>
//             {
//                 (flip) ? (
//                     <img className="cardbox-image" src={props.frontside} />
//                     // <img>{props.frontside}</img>
//                 ) : (
//                         <p className="cardbox-card-backside">{props.backside}</p>
//                     )
//             }
//             <div>Add me to the list!</div>
//         </li>
//     );
// }