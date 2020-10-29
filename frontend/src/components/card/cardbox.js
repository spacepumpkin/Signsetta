import React,{ useState } from 'react';

const CardBox = props => {
    const [flip, setFlip] = useState(true)
    return(
            <div onClick={setFlip(!flip)}>
                {
                    (flip) ? (
                        <h3>{props.frontside}</h3>
                    ) : (
                        props.backside
                    )

                }
            </div>
    );
}

export default CardBox;