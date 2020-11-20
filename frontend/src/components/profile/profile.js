import React from 'react';
import CardBox from '../card/cardbox';

import './profile.css';

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


  componentDidMount() {
    this.props.fetchCards()
    this.props.fetchUserCards(this.props.currentUser.id);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps);
  //   // console.log(this.props);
  //   debugger;
  // }

  render() {
    // debugger;
    // let emptyMessage = "Oh no! you have no cards!";
    let ProfileCards = this.props.cards.map(card => {
            if(this.props.cardIds.includes(card._id)){
              return <CardBox key={card._id} frontside={card.frontside} backside={card.backside} card={card} deleteCards={this.props.deleteCards} addCards={this.props.addCards} />
            } else {
              return "";
            }
          });
          return (
      <div className="ui segment">
        <h1>Welcome, {this.props.currentUser.username}</h1>
              {this.props.cardIds.length === 0 ? <h2>Your flashcards will go here! Add some sign langauge flashcards that you wish to study from the card page above.</h2> : null}
        <div className="ui segment center aligned grid">
          <div className="ui centered cards profile-cards">
            { ProfileCards }
          </div>
        </div>
      </div>
    )
  }
}



export default Profile;