import React from 'react';
import CardBox from '../card/cardbox'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUserCards(this.props.currentUser);
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <div> This is where the cards go
          {this.props.cards.map(card => (
            <CardBox key={card._id} frontside={card.frontside} backside={card.backside} />
          ))} 
        </div>
        
      </div>
    )
  }
}



export default Profile;