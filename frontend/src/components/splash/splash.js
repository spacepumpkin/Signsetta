import React from 'react';
import image from '../../images/splash-image.jpg';

import SearchContainer from '../search/search_bar_container';

const Splash = (state) => {
    return (
        <div className="ui masthead center
         aligned segment"style={{background: '#00000088', border:'none'}}>
            <div className="ui text container" style={{background: '000000'}}>
                <h1 className="ui header teal huge" style={{fontSize: '40px', textShadow: '2px 2px 10px  #00000099'}} >
                    Have YOU ever wanted to learn sign language? Start with SignSetta
                </h1>
                <h3   style={{color: '#dddddd',textShadow: '2px 2px 5px  #00000099',}}>
                    Use our innovative sign language games and our iconic sign language flashcards
                    {/* style={{textShadow: '2px 2px 8px  #ffffffff',}} */}
                </h3>
            </div>
            <div className="ui divider"></div>
            <div className="ui category search" >
                <div className="search-bar"><SearchContainer /> </div>
            </div>

            <div className="splash-img ui fluid image   " style={{background: '#000000', boxShadow: 'none'}}>
                <img src={image} className="image" alt="splash"  style={{position: 'fixed', zIndex: '-1000', top: '0', left: '0'}}/>
            </div>
        </div>

    )
}

export default Splash;