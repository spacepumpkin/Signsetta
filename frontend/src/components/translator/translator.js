import React from 'react';
import CardBox from '../card/cardbox';

export default function Translator(props) {

  // Set all cards after a fetch;
  let allCards = [];

  // Fetch cards on Mount
  React.useEffect(() => {
    props.fetchCards()
    console.log(props)
    allCards = Object.values(props.cards);
  }, [])

  // Hook for user input
  const [userInput, setUserInput] = React.useState("");

  // Hook for array of cards that match user input
  // const [outputCards, setOutputCards] = React.useState([]);
  const outputCards = [];

  // For every letter entered into text input, change the cards that will be shown
  const updateOutputCards = () => {
    userInput.split("").forEach((char) => {
      if (/\w/.test(char)) {
        // console.log(char)
        // setOutputCards(outputCards.push(char))
        outputCards.push(char)
      } else if (/\s/.test(char)) {
        // console.log(char)
        // setOutputCards(outputCards.push(" "))
        outputCards.push(" ")
      }
    })
  }

  React.useEffect(() => updateOutputCards(), [userInput])

  console.log(allCards);
  
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column seven wide">

        <h1 className="ui header teal"> Translate an English word to ASL </h1>

        <div className="ui action input">
          <input
            type="text"
            placeholder="Type any letters..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput} />
        </div>

        <div className="">
          {
            outputCards.map((char, idx) => {
              console.log(outputCards);
              if (char === " ") {
                return (
                  <div style={{ width: "50px" }}></div>
                )
              } else {
                return (
                  <CardBox key={`card-${idx}`} card={allCards.find((card) => card.backside === char)} />
                )
              }
            })
          }
        </div>

      </div>
    </div>
  )

}