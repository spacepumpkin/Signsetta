import React,{ useState } from 'react';

const CardBox = props => {
    const [flip, setFlip] = useState(true)
    return(
            <div onClick={() => setFlip(!flip)}>
                {
                    (flip) ? (
                    <img src={props.frontside}/>
                        // <img>{props.frontside}</img>
                    ) : (
                        props.backside
                    )

                }
            </div>
    );
}

export default CardBox;