import React from 'react';
import SimpleCard from './simple_card';
import './fs_game.css';

const WORDS_THREE = [
  "CAT",
  "BAT",
  "TOP",
  "SAW",
  "ALE",
  "ROW"
];

const WORDS_FOUR = [
  "BEER",
  "WINE",
  "DEER",
  "SAME",
  "CALM",
  "FLOW",
  "GLAD"
];

class FSGame extends React.Component {
  constructor(props) {
    super(props);
    this.cleared = {
      userGuess: "",
      currentLetter: "",
      currentWord: "",
      cardDelay: 1500
    };
    this.state = Object.assign({}, this.cleared);
    this.generateNewWord = this.generateNewWord.bind(this);
    this.replayWord = this.replayWord.bind(this);
    this.displayCards = this.displayCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }
  // componentDidMount() {
  //   this.props.fetchCards();
  // }
  componentWillUnmount() {
    clearInterval(this.cardSwitch);
  }
  displayCards() {
    this.setState({ currentLetter: "" })
    let count = 0, that = this;
    const { currentWord, cardDelay } = this.state;
    debugger
    // this.cardSwitch = setInterval(() => {
    //   if (count === currentWord.length) {
    //     clearInterval(cardSwitch);
    //     that.setState(that.cleared);
    //   }
    //   that.setState({ currentLetter: currentWord[count] })
    //   count++;
    // }, cardDelay);
  }
  generateNewWord(evt) {
    evt.preventDefault();
    let randomWord = WORDS_THREE[Math.floor(Math.random() * WORDS_THREE.length)];
    console.log(randomWord);
    this.setState({ currentWord: randomWord });
    debugger
    this.displayCards();
  }
  replayWord(evt) {
    evt.preventDefault();
    this.displayCards();
  }
  checkMatch(evt) {
    evt.preventDefault();
    if (this.state.userGuess.length > 0
      && this.state.userGuess.toLowerCase() === this.state.currentWord.toLowerCase()) {
      alert("That's right!")
    } else {
      alert("Sorry try again.")
    }
  }
  update() {
    return evt => this.setState({ userGuess: evt.currentTarget.value })
  }

  render() {
    const { cards } = this.props;
    // const { currentLetter } = this.state;
    const currentCard = Object.values(cards).find(
      (card) => {
        return card.backside === this.state.currentLetter;
      }
    );

    debugger
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column five wide">
          <div className="simple-card-box">
            <SimpleCard card={currentCard} />
          </div>
          <button onClick={this.generateNewWord} type="button"> Generate New Word </button>
          <button onClick={this.replayWord} type="button"> Replay </button>
          <input type="text" placeholder="Type your answer here" onChange={this.update()} value={this.state.userGuess} />
          <button onClick={this.checkMatch} type="button">Check</button>
        </div>
      </div>
    )
  }
}

export default FSGame;