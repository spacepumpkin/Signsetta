import React from 'react';

const SimpleCard = (props) => {
  // const [flip, setFlip] = React.useState(true)
  const { frontside, backside } = props.card || { frontside: "", backside: "" };
  return (
    <div className="ui centered card column three wide">
      <div className="image">
        {
          (backside.length >= 1) ?
            (
              <img src={frontside} alt={backside} />
            ) : (
              <div style={{ height: "200px" }}></div>
            )
        }
      </div>
    </div>
  );
}

export default SimpleCard;