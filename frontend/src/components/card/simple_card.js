import React from 'react';

const SimpleCard = (props) => {
  // const [flip, setFlip] = React.useState(true)
  return (
    <div className="ui centered card teal">
      <div className="image">
        <img src={props.frontside} alt={props.backside}/>
      </div>
    </div>
  );
}

export default SimpleCard;