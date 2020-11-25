import React from 'react';
import TranslatorCardBox from './translator_cardbox';

export default function Translator(props) {

  // Local state for fetched cards, user input, and array of characters to be rendered as cards
  const [allCards, setAllCards] = React.useState([]);
  const [userInput, setUserInput] = React.useState("");
  const [outputCards, setOutputCards] = React.useState([]);

  // Fetch cards on Mount; destructured props to avoid useEffect dependency warning
  const { fetchCards } = props;
  React.useEffect(fetchCards, [fetchCards])

  // Set allCards once props.cards are fetched
  React.useEffect(() => setAllCards(Object.values(props.cards)), [props.cards])

  // For every letter entered into text input, change the cards that will be shown
  const updateOutputCards = () => {
    setOutputCards(userInput.replace(/[^a-z\s]/gi, "").split(""))
  }

  // Update outputCards if userInput changes 
  // NEED this since React State Hooks are async and do not have a callback like setState does
  React.useEffect(updateOutputCards, [userInput])

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column twelve wide" style={{ marginTop: "50px" }}>
        <h1 className="ui header teal"> Translate English to ASL Fingerspelling </h1>

        <div className="ui input">
          <input
            type="text"
            placeholder="Type your word(s)..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            style={{ height: '100px', border: '2px solid #03dac5', fontSize: '30px' }}
          />
        </div>
        <div className="ui segment" style={{ overflowX: "scroll", whiteSpace: "initial" }}>
          <div className="ui text container">
            <span className="ui header teal tiny">Double letters:</span> sign the letter once, 
            then "bounce" your hand to the side in a small arc.
          </div>
          <div className="ui text container">
            <span className="ui header teal tiny">Multiple words:</span> sign each word 
            at a consistent pace, while leaving a longer pause between words.
          </div>
          <div className="ui text container">
            <span className="ui header teal tiny">Hyphenated words:</span> if it's important to
            the word, draw a small dash with your index finger and thumb.
          </div>
          <h3 className="" style={{ marginTop: "10px"}}>
            Now you can fingerspell any word! 😊
          </h3>
          </div>
        <div className="ui center aligned grid" style={{ marginTop: '20px' }} >

          <div className="ui row">
            {
              outputCards.map((char, idx) => {
                if (char === " ") {
                  // Return a dividing empty div if char is a space
                  return (
                    <div style={{ width: "50px", height: "50px", flexBasis: "100%" }}></div>
                  )
                } else {
                  // Return card that corresponds to current char
                  return (
                    <div>
                      <TranslatorCardBox key={`card-${idx}`} card={allCards.find((card) => card.backside === char.toUpperCase())} />
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )

}