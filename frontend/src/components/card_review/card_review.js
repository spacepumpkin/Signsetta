import React from 'react';
import { Link } from 'react-router-dom';
import CardBox from '../card/cardbox';

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
  }

  componentDidMount() {
    if (this.props.currentUser) {
      if (this.props.userCardIds) {
        this.setUserCardsToReviewCards();
      } else {
        if (!this.props.allCards) this.props.fetchCards();
        this.props.fetchUserCards(this.props.currentUser.id);
      }
    } else {
      alert("Sorry you must be logged in to save and review cards")
    }
  }

  componentDidUpdate() {
    // if (this.state.reviewCards.length === 0) {
    //   // set reviewCards to randomized array of user's cards (shuffled + mapped)
    //   let shuffledCards = this.shuffleCards(this.props.userCardIds.slice(0));
    //   let mappedCards = this.mapCards(shuffledCards, this.props.allCards);
    //   this.setState({ reviewCards: mappedCards })
    // }
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
        {
          userHasCards ? (
            <CardBox key={`review-card-${currentCardIdx}`} card={card} />
          ) : null
        }
        <div>
          {
            markedCards.includes(card) ? (
              <button className="ui button blue"
                type="button"
                onClick={() => this.setState({ markedCards: markedCards.filter((value) => value !== card) })}
              >Unmark</button>
            ) : (
                <button className="ui button blue"
                  type="button"
                  onClick={() => this.setState({ markedCards: markedCards.concat([card]) })}
                >Mark to Review Again Later</button>
              )
          }
        </div>
        <div>
          <button className="ui button teal"
            type="button"
            onClick={this.goToPrevCard}
            disabled={currentCardIdx === 0}
          >Prev</button>
          <button className="ui button teal"
            type="button"
            onClick={this.goToNextCard}
            disabled={currentCardIdx === reviewCards.length - 1}
          >Next</button>
          {
            currentCardIdx === reviewCards.length - 1 &&
            <div>
              <button className="ui button blue"
                type="button"
                onClick={this.reviewMarkedCards}
                disabled={this.state.markedCards.length === 0}
              >Review Marked Cards</button>
              <button className="ui button blue"
                type="button"
                onClick={this.reviewAllCards}
              >Review All Cards Again</button>
              or
              <Link to="/profile">
                <button className="ui button teal"
                  type="button"
                >Finish</button>
              </Link>
            </div>
          }
        </div>
      </div>
    )
  }
}
