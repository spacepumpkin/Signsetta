import React from 'react';
import SimpleCard from './simple_card';

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
      currentLetter: "",
      randomWord: "",
      cardDelay: 1500
    };
    this.state = this.cleared;
    this.generateNewWord = this.generateNewWord.bind(this);
    this.replayWord = this.replayWord.bind(this);
    this.displayCards = this.displayCards.bind(this);
  }
  componentDidMount() {
    this.props.fetchCards();
  }
  displayCards() {
    this.setState({ currentLetter: "" })
    let count = 0, that = this;
    const { randomWord, cardDelay } = this.state;
    let cardSwitch = setInterval(() => {
      if (count === randomWord.length) {
        clearInterval(cardSwitch);
        that.setState(that.cleared);
      }
      that.setState({ currentLetter: randomWord[count] })
      count++;
    }, cardDelay);
  }
  generateNewWord() {
    let randomWord = WORDS_THREE[Math.floor(Math.random() * WORDS_THREE.length)];
    console.log(randomWord);
    this.setState({ randomWord: randomWord });
    this.displayCards();
  }
  replayWord() {
    this.displayCards();
  }

  render() {
    const { cards } = this.props;
    debugger
    return (
      <div>
        <div>
          <div>
            {/* <SimpleCard currentLetter={this.state.currentLetter} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default FSGame;