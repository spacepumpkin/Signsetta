import React from 'react';
import './card_index.css';
import '../../reset.css'

const CardBox = props => {
    const [flip, setFlip] = React.useState(true)
    return(
            <li >
                <div className="cardbox-card" onClick={() => setFlip(!flip)}>
                {
                    (flip) ? (
                        <img className="cardbox-image" src={props.frontside}/>
                        // <img>{props.frontside}</img>
                        ) : (
                            <p className="cardbox-card-backside">{props.backside}</p> 
                            )
                }
                </div>
                <div>Add me to the list!</div>
            </li>
    );
}

export default CardBox;

// const CardBox = props => {
//     const [flip, setFlip] = React.useState(true)
//     return (
//         <li className="cardbox-card" onClick={() => setFlip(!flip)}>
//             {
//                 (flip) ? (
//                     <img className="cardbox-image" src={props.frontside} />
//                     // <img>{props.frontside}</img>
//                 ) : (
//                         <p className="cardbox-card-backside">{props.backside}</p>
//                     )
//             }
//             <div>Add me to the list!</div>
//         </li>
//     );
// }