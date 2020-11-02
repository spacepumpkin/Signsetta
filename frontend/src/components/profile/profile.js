import React from 'react';
import CardBox from '../card/cardbox'

class Profile extends React.Component {
  constructor(props) {
    super(props);
 
  }


  componentDidMount() {
    this.props.fetchCards()
    this.props.fetchUserCards(this.props.currentUser.id);
  }

  render() {
    console.log(this.props.cardIds)
    let ProfileCards =  this.props.cards.map(card => {
      console.log(card._id);
            if(this.props.cardIds.includes(card._id)){
              return <CardBox key={card._id} frontside={card.frontside} backside={card.backside} card={card} />
            }
    })
    

    return (
      <div className="ui segment">
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <div className="ui segment center aligned grid">
          <div className="ui centered cards">
            { ProfileCards }

          </div>
        </div>
      </div>
    )
  }
}



export default Profile;