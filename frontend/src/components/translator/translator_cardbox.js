import React from 'react';
import { postCardsToUser, deleteCardsFromUser } from '../../actions/card_actions';
import { Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './translator_cardbox.css';

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

// Adapted from CardBox; had to adjust stylesheet + inline styles to reduce box size
class TranslatorCardBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flip: true,
      animation: true
    }

    this.addUserCard = this.addUserCard.bind(this);
    this.deleteUserCard = this.deleteUserCard.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  flipAll = () => {
    return (this.setState({ animation: !this.state.animation }),
      setTimeout(() => this.setState({ flip: !this.state.flip }), 400))
  }

  addUserCard = (e) => {
    e.stopPropagation()
    if (e.target.className === "ui bottom attached button") {
      this.props.addCards(this.props.currentUser.id, JSON.stringify([this.props.card._id]));
    }
  }

  deleteUserCard = (e) => {
    e.stopPropagation()
    if (e.target.className === "ui bottom attached button") {
      this.props.deleteCards(this.props.currentUser.id, JSON.stringify([this.props.card._id]));
    }
  }

  handleLoad() {
    // Loading icon state
    this.setState({ loaded: true });
  }

  render() {
    let user = this.props.currentUser;

    let addButton = (<div className="ui bottom attached button" onClick={this.addUserCard} >
      <i className="add icon"></i> Add Card
    </div>
    );

    let deleteButton = (<div className="ui bottom attached button" onClick={this.deleteUserCard} >
      <i className="minus icon"></i> Delete Card
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
          style={{ backgroundColor: '#000000', color: "white", textAlign: 'center', margin: "0 auto", width: "150px", minHeight: "100px" }}
          onClick={() => this.flipAll()} >
          {
            (this.state.flip) ? (
              <div className="translator-cardbox-size">
                <div className={`ui centered loader ${this.state.loaded ? '' : 'active'}`} ></div>
                <img
                  className="ui centered image translator-image-size"
                  src={this.props.card.frontside}
                  onLoad={this.handleLoad}
                  alt="card" />

                {
                  // Check if currentUser exists; if so, render the Add Card button
                  (
                    (Object.prototype.toString.call(user) === "[object Object]") && (Object.keys(user).length !== 0)
                    &&
                    cardButton
                  )}
              </div>

            ) : (
                <div className="translator-cardbox-size">
                  <div className="card-backside translator-cardbox-size translator-cardbox-backside">
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

export default connect(mSP, mDP)(TranslatorCardBox);