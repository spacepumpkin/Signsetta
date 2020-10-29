import React from 'react';
import './card_index.css';
import '../../reset.css'

const CardBox = props => {
    const [flip, setFlip] = React.useState(true)
    return(
            <li className="cardbox-card" onClick={() => setFlip(!flip)}>
                {
                    (flip) ? (
                    <img className="cardbox-image" src={props.frontside}/>
                        // <img>{props.frontside}</img>
                    ) : (
                        props.backside
                    )

                }
            </li>
    );
}

export default CardBox;