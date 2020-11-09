import React from 'react';
import SimpleCard from './simple_card';
import './fs_game.css';

// const WORDS_THREE = [
//   "CAT", "BAT", "TOP", "SAW", "ALE", "ROW"
// ];
// const WORDS_FOUR = [
//   "BEER", "WINE", "DEER", "SAME", "CALM", "FLOW", "GLAD"
// ];
const WORDS = {
  three: ["CAT", "BAT", "TOP", "SAW", "ALE", "ROW", "DOG", "EAT", "TUB", "VAN", "ZIP"],
  four: ["BEAR", "WINE", "DUNE", "SAME", "CALM", "FLOW", "GLAD", "LIKE", "NEON"],
  five: ["CATCH", "BADGE", "TIGER", "BAKER", "DODGE", "PASTA", "CROWN", "ALIVE", "LEMUR"]
};

const SPEED = {
  slow: 2000, medium: 1500, fast: 1000, fluent: 500, native: 200
}

class FSGame extends React.Component {
  constructor(props) {
    super(props);
    this.cleared = {
      userGuess: "",
      currentLetter: "",
      cardMessage: "Get Ready",
      revealAnswerCheck: false
      // currentWord: "",
      // cardDelay: 1500
    };
    this.currentWord = "";
    this.cardDelay = SPEED.medium;
    this.wordLength = "four";
    this.cardDisplaying = false;
    // this.revealAnswerCheck = false;

    this.state = Object.assign({}, this.cleared);
    this.generateNewWord = this.generateNewWord.bind(this);
    this.replayWord = this.replayWord.bind(this);
    this.displayCards = this.displayCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }
  componentDidMount() {
    this.props.fetchCards();
  }
  componentWillUnmount() {
    clearInterval(this.cardSwitch);
  }
  displayCards() {
    // return () => {
    // this.setState({ currentLetter: "" })
    // this.currentLetter = "";
    let count = 0, that = this;
    // const { currentWord, cardDelay } = this.state;

    // debugger
    this.cardSwitch = setInterval(() => {
      if (count === that.currentWord.length) {
        clearInterval(that.cardSwitch);
        that.cardDisplaying = false;
        this.setState({ currentLetter: "", cardMessage: "What do I spell?" })
      } else {
        that.cardDisplaying || (that.cardDisplaying = true);
        // that.cardDisplaying = true;
        that.setState({ currentLetter: that.currentWord[count] })
        // that.currentLetter = that.currentWord[count];
        console.log(that.state.currentLetter);
        count++;
      }
    }, that.cardDelay);
    // }
  }
  generateNewWord() {
    // evt.preventDefault();
    // return () => {
    this.setState({ userGuess: "" });
    let wordArr = WORDS[this.wordLength];
    let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    while (randomWord === this.currentWord) {
      randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    }
    // this.setState({ currentWord: randomWord });
    this.currentWord = randomWord;
    // debugger
    this.displayCards();
    // }
  }
  replayWord(evt) {
    evt.preventDefault();
    this.displayCards();
  }
  checkMatch(evt) {
    evt.preventDefault();
    if (this.state.userGuess.length > 0
      && this.state.userGuess.toLowerCase() === this.currentWord.toLowerCase()) {
      // alert("That's right!");
      // this.cardMessage = "That's right!";
      this.setState({ cardMessage: "* ~ That's right! ~ *" });
    } else if (this.currentWord === "") {
      // alert("Please generate a new word.");
      this.setState({ cardMessage: "Please generate a new word." });
    } else if (this.state.userGuess === "") {
      // alert("Please enter a guess.");
      this.setState({ cardMessage: "Please enter a guess." });
    } else {
      // alert("Sorry try again.");
      this.setState({ cardMessage: "Sorry try again." });
    }
  }
  update() {
    return evt => this.setState({ userGuess: evt.currentTarget.value });
  }
  speedSelect() {
    return (evt) => {
      switch (evt.target.value) {
        case "slow":
          this.cardDelay = SPEED.slow;
          break;
        case "fast":
          this.cardDelay = SPEED.fast;
          break;
        case "fluent":
          this.cardDelay = SPEED.fluent;
          break;
        case "native":
          this.cardDelay = SPEED.native;
          break;
        default:
          this.cardDelay = SPEED.medium;
          break;
      }
    }
  }
  wordSelect() {
    return (evt) => {
      this.wordLength = evt.target.value;
    }
  }
  revealAnswer() {
    return () => {
      this.setState({ cardMessage: `The answer was: ${this.currentWord}` });
      this.setState({ revealAnswerCheck: false });
    };
  }
  // revealAnswerCheck() {
  //   // return () => this.revealAnswerCheck = 
  // }

  render() {
    // const { cards } = this.props;
    // const { currentLetter } = this.state;
    const currentCard = Object.values(this.props.cards).find(
      (card) => {
        return card.backside === this.state.currentLetter;
        // return card.backside === this.currentLetter;
      }
    );

    console.log(this.state.revealAnswerCheck);

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column seven wide">
          <h1 className="ui header teal"> Guess That Word! </h1>
          <div className="simple-card-box">
            <SimpleCard card={currentCard} cardMessage={this.state.cardMessage} />
          </div>
          <div className="ui divider"></div>
          <button className="ui button inverted pink" onClick={this.generateNewWord} type="button"
            disabled={this.cardDisplaying}> Generate New Word
          </button>
          <button className="ui button" onClick={this.replayWord} type="button"
            disabled={this.cardDisplaying || (this.currentWord === "")}> Replay </button>

          <div className="ui action input">
            <form onSubmit={this.checkMatch} className="ui action input">
              <input type="text" placeholder="Type your answer here" onChange={this.update()} value={this.state.userGuess} />
              <button className="ui button teal">Check</button>
            </form>
          </div>
        </div>
        <div className="row five wide">
          <div className="ui form" onChange={this.speedSelect()}>
            <div className="inline fields">
              <label className="ui header teal"> Speed </label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="speed"
                    value="slow" />
                  <label>slow</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox" >
                  <input type="radio" name="speed"
                    value="medium" defaultChecked />
                  <label>medium</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="speed"
                    value="fast" />
                  <label>fast</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="speed"
                    value="fluent" />
                  <label>fluent</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="speed"
                    value="native" />
                  <label>native</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row five wide">
          <div className="ui form" onChange={this.wordSelect()}>
            <div className="inline fields">
              <label className="ui header teal"> Number of Letters </label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="length"
                    value="three" />
                  <label>three</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox" >
                  <input type="radio" name="length"
                    value="four" defaultChecked />
                  <label>four</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="length"
                    value="five" />
                  <label>five</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui row">
          <button className="ui button" onClick={() => this.setState({ revealAnswerCheck: true })} type="button"
            disabled={this.cardDisplaying || (this.currentWord === "") || (this.state.cardMessage.includes("answer"))}> Reveal Answer </button>
          {
            (this.state.revealAnswerCheck)
            && (
              <div className="ui middle aligned content">
                <span style={{ padding: "0px 10px"}}>
                  Are you sure?
                </span>
                <button className="ui button" onClick={this.revealAnswer()} type="button"> Yes </button>
                <button className="ui button" onClick={() => this.setState({ revealAnswerCheck: false })} type="button"> No </button>
              </div>
            )
          }
        </div>

        <div className="ui segment">
          <div className="ui text container">
            Practice your fingerspelling comprehension by guessing words!
            Begin by choosing your <span className="ui header teal small">speed</span> and the
             <span className="ui header teal small"> number of letters</span> in the word, or go
            with the default settings.
            Then press <button className="ui pink button tiny disabled" type="button">Generate New Word</button> to get
            started! You can also replay the word as many times as you'd like.
          </div>
          <div className="ui divider"></div>
          <div className="ui text container center aligned">
            Once you're satisfied, type your guess and check if it's right!
            </div>
        </div>
      </div>
    )
  }
}

export default FSGame;

// class FSGame extends React.Component {
//   constructor(props) {
//     super(props);
//     this.cleared = {
//       userGuess: "",
//       currentLetter: "",
//       currentWord: "",
//       cardDelay: 1500
//     };
//     this.state = Object.assign({}, this.cleared);
//     this.generateNewWord = this.generateNewWord.bind(this);
//     this.replayWord = this.replayWord.bind(this);
//     this.displayCards = this.displayCards.bind(this);
//     this.checkMatch = this.checkMatch.bind(this);
//   }
//   // componentDidMount() {
//   //   this.props.fetchCards();
//   // }
//   componentWillUnmount() {
//     clearInterval(this.cardSwitch);
//   }
//   displayCards() {
//     return () => {
//       this.setState({ currentLetter: "" })
//       // this.currentLetter = "";
//       let count = 0, that = this;
//       const { currentWord, cardDelay } = this.state;

//       debugger
//       this.cardSwitch = setInterval(() => {
//         if (count === currentWord.length) {
//           clearInterval(that.cardSwitch);
//           that.setState(that.cleared);
//         }
//         that.setState({ currentLetter: currentWord[count] })
//         count++;
//       }, cardDelay);
//     }
//   }
//   generateNewWord() {
//     // evt.preventDefault();
//     return () => {
//       let randomWord = WORDS_THREE[Math.floor(Math.random() * WORDS_THREE.length)];
//       console.log(randomWord);
//       this.setState({ currentWord: randomWord });
//       // this.currentWord = randomWord;
//       debugger
//       this.displayCards()();
//     }
//   }
//   replayWord(evt) {
//     evt.preventDefault();
//     this.displayCards();
//   }
//   checkMatch(evt) {
//     evt.preventDefault();
//     if (this.state.userGuess.length > 0
//       && this.state.userGuess.toLowerCase() === this.state.currentWord.toLowerCase()) {
//       alert("That's right!")
//     } else {
//       alert("Sorry try again.")
//     }
//   }
//   update() {
//     return evt => this.setState({ userGuess: evt.currentTarget.value })
//   }

//   render() {
//     const { cards } = this.props;
//     // const { currentLetter } = this.state;
//     const currentCard = Object.values(cards).find(
//       (card) => {
//         return card.backside === this.state.currentLetter;
//       }
//     );

//     debugger
//     return (
//       <div className="ui middle aligned center aligned grid">
//         <div className="column five wide">
//           <div className="simple-card-box">
//             <SimpleCard card={currentCard} />
//           </div>
//           <button onClick={this.generateNewWord()} type="button"> Generate New Word </button>
//           <button onClick={this.replayWord} type="button"> Replay </button>
//           <input type="text" placeholder="Type your answer here" onChange={this.update()} value={this.state.userGuess} />
//           <button onClick={this.checkMatch} type="button">Check</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default FSGame;