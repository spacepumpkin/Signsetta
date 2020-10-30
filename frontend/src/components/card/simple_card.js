import React from 'react';

const SimpleCard = (props) => {
  // const [flip, setFlip] = React.useState(true)
  const { frontside, backside } = props.card || {frontside: "", backside: ""};
  return (
    <div className="ui centered card teal column three wide">
      <div className="image">
        <img src={frontside} alt={backside}/>
      </div>
    </div>
  );
}

export default SimpleCard;