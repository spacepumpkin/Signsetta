import React from 'react';

class CardBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.frontside}</h3>
            </div>
        );
    }
}

export default CardBox;