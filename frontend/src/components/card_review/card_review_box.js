import React from 'react';
import { postCardsToUser, deleteCardsFromUser } from '../../actions/card_actions';
import { Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './card_review_box.css';

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

// Adapted from CardBox; had to adjust stylesheet + inline styles to increase box size
class CardReviewBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flip: true,
      animation: true
    }

    this.addToUserCards = this.addToUserCards.bind(this);
    this.deleteUserCards = this.deleteUserCards.bind(this);
    this.handleLoad = this.handleLoad.bind(this); 
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // Listens for spacebar to flip
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(evt) {
    // Flip card with spacebar
    if (evt.code === "Space") this.flipAll()
  }

  flipAll = () => {
    return (this.setState({ animation: !this.state.animation }),
      setTimeout(() => this.setState({ flip: !this.state.flip }), 400))
  }

  addToUserCards = (e) => {
    e.stopPropagation()
    if (e.target.className === "ui bottom attached button") {
      this.props.addCards(this.props.currentUser.id, JSON.stringify([this.props.card._id]));
    }
  }

  deleteUserCards = (e) => {
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
    debugger
    return (

      <Transition
        visible={this.state.animation}
        animation='horizontal flip'
        duration={400}
        onHide={() => this.setState({ animation: !this.state.animation })}>
        <div className="ui teal card" 
          style={{ backgroundColor: '#000000', color: "white", textAlign: 'center', margin: "0 auto", width: "750px", minHeight: "500px" }}
          onClick={() => this.flipAll()} >
          {
            (this.state.flip) ? (
              <div className="set-box-size">
                <div className={`ui centered loader ${this.state.loaded ? '' : 'active'}`} ></div>
                <img
                  className="ui centered rounded image set-image-size"
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
                <div className="set-box-size">
                  <div className="card-backside set-box-size card-review-backside">
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

export default connect(mSP, mDP)(CardReviewBox);