import React from 'react';
import { postCardsToUser} from '../../actions/user_actions'
import { Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';


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

// CardBox is the main export of the file 
class CardBox extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            flip: true,
            animation: true,
            cards: []
        }
    }
   
    flipAll = () => {
        
            return (this.setState({animation: !this.state.animation}), 
            setTimeout(() => this.setState({flip: !this.state.flip}), 400))      
    }

    addToUserCards = (e) => {
        e.stopPropagation()
       if (e.target.className === "ui bottom attached button"){
    
            this.state.cards.push(this.props.card._id)
        }        
    }

    componentWillUnmount(){
        if(this.state.cards.length > 0){
            let str = `${this.state.cards}`;
            this.props.addCards(this.props.currentUser.id,{cards: str});    
            
        }
       
    }


    render() {
        
        return (
            
                    <Transition 
                    visible={this.state.animation} 
                    animation='horizontal flip' 
                    duration={400} 
                    onHide={() => this.setState({animation: !this.state.animation})}>
                        <div className="ui teal card" onClick={ () => this.flipAll()} >     
                            {
                                (this.state.flip) ? (
                                    <div>
                                        <img className=" column image" src={this.props.card.frontside} height="150"/>

                                        <div className="ui bottom attached button" onClick={this.addToUserCards} >
                                            <i className="add icon"></i>
                                            Add To Your Cards
                                        </div>
                                    </div>
        
                                ) : (
                                    <p className="content">{this.props.card.backside}</p> 
                                )    
                            }
                            
                        </div> 
                    </Transition>
                
        );
    }
}
const mSP = state => {
    
    return {
        currentUser: state.session.user
    }
}
const mDP = dispatch => {
    return {
        addCards: (id, cards) => dispatch(postCardsToUser(id, cards))
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