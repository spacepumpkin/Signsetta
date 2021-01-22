import React from 'react';
import { Link } from 'react-router-dom';

import "./card_review.css";
import CardReviewBox from './card_review_box';

export default class CardReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCards: [],
      currentCardIdx: 0,
      markedCards: []
    }
    this.setUserCardsToReviewCards = this.setUserCardsToReviewCards.bind(this);
    this.goToPrevCard = this.goToPrevCard.bind(this);
    this.goToNextCard = this.goToNextCard.bind(this);
    this.reviewMarkedCards = this.reviewMarkedCards.bind(this);
    this.reviewAllCards = this.reviewAllCards.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCardMark = this.handleCardMark.bind(this);
  }

  componentDidMount() {
    // debugger
    if (this.props.currentUser) {
      if (this.props.userCardIds && this.props.userCardIds.length !== 0) {
        this.setUserCardsToReviewCards();
      } else {
        if (!this.props.allCards) this.props.fetchCards();
        this.props.fetchUserCards(this.props.currentUser.id);
      }
    } else {
      alert("Sorry you must be logged in to save and review cards")
    }
    // Listen for arrow keys to go to prev or next card
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentDidUpdate(prevProps) {
    // Fixes cards not loading after refresh
    if (prevProps.userCardIds !== this.props.userCardIds) {
      this.setUserCardsToReviewCards();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  setUserCardsToReviewCards() {
    let shuffledCards = this.shuffleCards(this.props.userCardIds.slice(0));
    let mappedCards = this.mapCards(shuffledCards, this.props.allCards);
    this.setState({ reviewCards: mappedCards, currentCardIdx: 0 })
  }

  shuffleCards(cards) {
    // Durstenfeld shuffle (optimized Fisher-Yates shuffle) - O(n)
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards
  }

  mapCards(cardIds, allCards) {
    // takes in array of card ids and maps it to the actual cards
    return cardIds.map((cardId) => {
      return allCards.find((card) => {
        return card._id === cardId
      })
    })
  }

  goToPrevCard() {
    if (this.state.currentCardIdx > 0) {
      this.setState({ currentCardIdx: this.state.currentCardIdx - 1 })
    }
  }

  goToNextCard() {
    if (this.state.currentCardIdx < this.state.reviewCards.length - 1) {
      this.setState({ currentCardIdx: this.state.currentCardIdx + 1 })
    }
  }

  handleKeyDown(evt) {
    // console.log("evt code: ", evt.code)
    if (["Space", "ArrowLeft", "ArrowRight", "KeyM"].includes(evt.code)) evt.preventDefault();
    switch (evt.code) {
      case "ArrowLeft": this.goToPrevCard(); break;
      case "ArrowRight": this.goToNextCard(); break;
      case "KeyM": this.handleCardMark(this.state.reviewCards[this.state.currentCardIdx]); break;
      default: break;
    }
  }

  handleCardMark(card) {
    // console.log("card: ", card)
    if ((Object.prototype.toString.call(card) !== "[object Object]") || (Object.keys(card).length === 0)) return;
    if (!this.state.markedCards.includes(card)) {
      this.setState({ markedCards: this.state.markedCards.concat([card]) })
    } else {
      this.setState({ markedCards: this.state.markedCards.filter((value) => value !== card) })
    }
  }

  reviewMarkedCards() {
    let shuffledCards = this.shuffleCards(this.state.markedCards.slice(0));
    // let mappedCards = this.mapCards(shuffledCards, this.props.allCards);
    this.setState({ reviewCards: shuffledCards, currentCardIdx: 0 });
  }

  reviewAllCards() {
    // let shuffledCards = this.shuffleCards(this.props.userCardIds.slice(0));
    // let mappedCards = this.mapCards(shuffledCards, this.props.allCards);
    // this.setState({ reviewCards: mappedCards, currentCardIdx: 0 });
    this.setUserCardsToReviewCards();
  }

  render() {
    const { reviewCards, currentCardIdx, markedCards } = this.state;
    let userHasCards = (reviewCards.length !== 0);
    let card = userHasCards ? this.state.reviewCards[currentCardIdx] : {};

    return (
      <div>
        <div>
          <div>
            {
              userHasCards ? (
                <CardReviewBox key={`review-card-${currentCardIdx}`} card={card} />
              ) : null
            }
          </div>

          <div className="ui center aligned segment">
            <div className="ui big buttons">
              <button className="ui button teal"
                type="button"
                onClick={this.goToPrevCard}
                onMouseDown={(e) => e.preventDefault()}
                disabled={currentCardIdx === 0}
              ><i className="angle left icon"></i> Prev </button>
              <div className="or"></div>
              <button className="ui button teal"
                type="button"
                onClick={this.goToNextCard}
                onMouseDown={(e) => e.preventDefault()}
                disabled={currentCardIdx === reviewCards.length - 1}
              > Next <i className="angle right icon"></i></button>
            </div>
          </div>

          <div className="ui center aligned segment" style={{ height: "320px" }}>
            <div style={{ height: "170px" }}>
              <div style={{ fontSize: "20px" }}>
                {`Card ${currentCardIdx + 1} of ${reviewCards.length}`}
              </div>
              <div style={{ margin: "20px 0 20px 0" }}>
                {
                  markedCards.includes(card) ? (
                    <div>
                      <button className="ui button basic blue"
                        type="button"
                        onClick={() => this.handleCardMark(card)}
                        onMouseDown={(e) => e.preventDefault()}
                      >Unmark</button>
                    </div>
                  ) : (
                      <div>
                        <button className="ui button blue"
                          type="button"
                          onClick={() => this.handleCardMark(card)}
                          onMouseDown={(e) => e.preventDefault()}
                        >Mark to Review Again Later</button>
                      </div>
                    )
                }
              </div>
              <div className="ui text container">
                Here you can review your hand-picked cards individually.
              Navigate with the <span className="ui header teal small">Prev</span> or
             <span className="ui header teal small">Next</span> buttons, or use your
             arrow keys <kbd> ← </kbd><kbd> → </kbd>. Click on the card or press <kbd>Space</kbd> to reveal the answer!
             You can also mark cards for another review with the button or by pressing <kbd>M</kbd>.
            </div>
            </div>

            <div className="ui divider"></div>

            {
              currentCardIdx === reviewCards.length - 1 &&
              <div>
                <h3> Congrats you made it to the end! </h3>
                <button className="ui button blue"
                  type="button"
                  onClick={this.reviewMarkedCards}
                  disabled={this.state.markedCards.length === 0}
                >Review Marked Cards {`(${markedCards.length})`} </button>
                <button className="ui button blue"
                  type="button"
                  onClick={this.reviewAllCards}
                >Review All Cards Again</button>
                <span style={{ padding: "0 5px" }}>or</span>
                <Link to="/profile">
                  <button className="ui button large bold teal"
                    type="button"
                    style={{ fontWeight: "bold" }}
                  >Finish Review Session</button>
                </Link>
              </div>
            }
          </div>

          {/* <div className="ui segment"> */}

          {/* </div> */}
        </div>
      </div>
    )
  }
}
