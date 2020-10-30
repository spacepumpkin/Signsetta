import React from 'react';
import { Transition } from 'semantic-ui-react';


const CardBox = props => {
    const [flip, setFlip] = React.useState(true)
    const [animation, setAnimation] = React.useState(true)

    const flipAll = () => {
            return setAnimation(!animation), setTimeout(() => setFlip(!flip), 400)            
    }

    return (
        
                <Transition visible={animation} animation='horizontal flip' duration={400} onHide={() => setAnimation(!animation)}>
                    <div className="teal card" onClick={ () => flipAll()} >     
                        {
                            (flip) ? (
                                <div classname="ui grid centered pink">
                                    <img className=" column image" src={props.frontside} height="150"/>

                                    <div className="ui bottom attached button">
                                        <i className="add icon"></i>
                                         Add To Your Cards
                                    </div>
                                </div>
    
                            ) : (
                                <p className="content">{props.backside}</p> 
                            )    
                        }

                        
                    </div> 
                 </Transition>
            
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