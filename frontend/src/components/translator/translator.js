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
        <h1 className="ui header teal"> Translate an English word to ASL </h1>

        <div className="ui input">
          <input
            type="text"
            placeholder="Type any letters..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            style={{ height: '100px', border: '2px solid #03dac5', fontSize: '30px' }}
          />
        </div>
        <div className="ui center aligned grid" style={{ marginTop: '50px' }} >

          <div className="ui row">
            {
              outputCards.map((char, idx) => {
                if (char === " ") {
                  // Return a dividing empty div if char is a space
                  return (
                    <div style={{ width: "50px", height: "50px" }}></div>
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