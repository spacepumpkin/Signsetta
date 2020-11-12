import React from 'react';
import image from '../../images/splash-image.jpg';

import SearchContainer from '../search/search_bar_container';

const Splash = (state) => {
    return (
        <div className="ui masthead center
         aligned segment">
            <div className="ui text container">
                <h1 className="ui header teal huge" style={{fontSize: '50px'}}>
                    Have YOU ever wanted to learn sign language? Start with SignSetta
                </h1>
                <h3>
                
                    Use our innovative sign language games and our iconic sign language flashcards

                </h3>
            </div>
            <div className="ui divider"></div>
            <div className="ui category search">
                <div className="search-bar"><SearchContainer /> </div>
            </div>

            <div className="splash-img ui fluid image inverted  segment">
                <img src={image} className="image" alt="splash"  style={{position: 'fixed', zIndex: '-1000', top: '0'}}/>
            </div>
        </div>

    )
}

export default Splash;