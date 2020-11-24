import React from 'react';
import CardBox from '../card/cardbox';
import { Link } from 'react-router-dom';

import './profile.css';

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


  componentDidMount() {
    document.title = "Signsetta";
    this.props.fetchCards();
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
      if (this.props.userCardIds.includes(card._id)) {
        return (
          <CardBox
            key={card._id}
            card={card}
          />
        )
      } else {
        return "";
      }
    });
    return (
      <div className="ui segment">
        <h1>Welcome, {this.props.currentUser.username}</h1>
        {
          this.props.userCardIds.length === 0 ?
            <h2>
              Your flashcards will go here! Click the "Cards" button above to
              see all the flashcards you can add to your study list.
            </h2>
            :
            <div>
              <h2>
                These are your flashcards! You can study your cards by clicking on them.
                You can find more cards to add to your list of cards by clicking on the
                <span className="ui header blue small">"Cards"</span> button above. 
                Also check out our flashcard learning game by clicking on the
                <span className="ui header pink small">"Fingerspelling Practice"</span> button!
                Want to review your cards one-by-one? Click here:
              </h2>
              <div className="ui center aligned grid" style={{ margin: "20px 0" }}>
                <Link to="/card-review">
                  <button className="ui button huge teal" type="button">Review Your Cards</button>
                </Link>
              </div>
            </div>
        }
        <div className="ui segment center aligned grid">
          <div className="ui centered cards profile-cards">
            {ProfileCards}
          </div>
        </div>

      </div>
    )
  }
}



export default Profile;