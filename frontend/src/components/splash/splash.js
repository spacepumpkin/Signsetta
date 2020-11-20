import React from 'react';
import image from '../../images/splash-image.jpg';
import './splash.css'
import SearchContainer from '../search/search_bar_container';

const Splash = (state) => {
    return (
        <div className="ui masthead center
         aligned segment"style={{background: '#0008', border:'none', marginTop: "60px"}}>
            <div className="ui text container" style={{background: '000000'}}>
                <h1 className="ui header teal huge" style={{fontSize: '40px', textShadow: '2px 2px 10px  #00000099'}} >
                    Have YOU ever wanted to learn sign language? Start with SignSetta
                </h1>
                <h3   style={{color: '#dddddd',textShadow: '2px 2px 5px  #00000099',}}>
                    Use our innovative sign language games and our iconic sign language flashcards
                    {/* style={{textShadow: '2px 2px 8px  #ffffffff',}} */}
                </h3>
            </div>
            <div className="ui category search" >
                <div className="search-bar"><SearchContainer /> </div>
            </div>

            <div className="ui fluid image" style={{background: '#000000', boxShadow: 'none'}}>
                <img src={image} className="image" alt="splash"  id="splash-image" style={{ position: 'fixed',zIndex: '-1000',top: '0' ,  left: '0'}}/>
            </div>
        </div>

    )
}

export default Splash;