import React from 'react';

class CardShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {flip: true}
    }

    componentDidMount(){
        const cardId = this.props.match.params.cardId;
        this.props.fetchCard(cardId);
    }

    render(){
        const { card } = this.props;
      
        return(
            <div className="card-show">
                <li >
                    <div className="cardbox-card" onClick={() => this.setState({flip: !this.state.flip})}>
                        {
                            (this.state.flip) ? (
                                <img className="cardbox-image" src={card.frontside} alt="card-img"/>
                            ) : (
                                    <p className="cardbox-card-backside">{card.backside}</p>
                                )
                        }
                    </div>

                    {/* <h2 onClick={/}>Add me to the list!</h2> */}
                </li>
            </div>
        )
        
    }
}

export default CardShow;




