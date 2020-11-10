import React from 'react';
import image from '../../images/splash-image.jpg';

import SearchContainer from '../search/search_bar_container';
// import { Button, Modal } from 'semantic-ui-react';

// import SignupModal from '../session/signup_form';
// import "./splash.css";

const Splash = (state) => {
    // const [open, setOpen] = React.useState(false);

    return (
        <div className="ui masthead center aligned segment">
            <div className="ui text container">
                <h1 className="ui header teal">
                    SignSetta is an application designed to help people learn how to use sign language.
                </h1>
                <h3>
                    Users will be able to take classes
                    and use flashcards to learn sign language and test themselves on various
                    signs before moving onto more difficult and specific topics in sign language.
                </h3>
            </div>
            <div className="ui divider"></div>
            <div className="ui category search">
                <div className="search-bar">Search for any letter or number between 1-10:<SearchContainer /> </div>
            </div>

            <div className="splash-img ui fluid image">
                <img src={image} className="image" alt="splash" />
            </div>
        </div>

    )
}

export default Splash;