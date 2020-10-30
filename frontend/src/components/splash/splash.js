import React from 'react';
import image from '../../images/splash-image.jpg';

import SearchContainer from '../search/search_container';

const Splash = state => {
    return (
        <div>
            <div className="description">SignSetta is an application designed to help 
            people learn how to use sign language. Users will be able to take classes 
            and use flashcards to learn sign language and test themselves on various 
            signs before moving onto more difficult and specific topics in sign language.</div>


            <div className="search-bar">Search:<SearchContainer /> </div>

            <div className="splash-img">
                <img src={image} className="image" alt="image" />
            </div>

        </div>

    )
}

export default Splash;