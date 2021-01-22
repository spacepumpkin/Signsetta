import React from 'react';
import image from '../../images/hands-image.jpg';
import './splash.css';

// import SearchContainer from '../search/search_bar_container';

const Splash = (state) => {
    return (
        <div className="ui masthead center
         aligned segment"style={{ background: '#00000000', border: 'none', boxShadow: 'none' }}>
            <div className="ui text" style={{ background: '000000'}}>
                <h1 id="splash-main-header" className="ui header huge" style={{
                    color: '#00dcd2', fontSize: '70px', fontWeight: 'bold', textShadow: '2px 2px 15px black', paddingTop: '20%'}} >
                    Start your ASL journey with Signsetta.
                </h1>
                <h3 style={{ color: '#dddddd', textShadow: '2px 2px 10px black', fontSize: '25px' }}>
                    Utilize our innovative sign language game, flashcards and translator to learn American Sign Language
                    {/* style={{textShadow: '2px 2px 8px  #ffffffff',}} */}
                </h3>
            </div>
            <div className="ui divider" style={{ border: 'none' }}></div>
            {/* <div className="ui category search" style={{ border: 'none' }}>
                <div className="search-bar"><SearchContainer /> </div>
            </div> */}

            <div className="splash-img ui fluid image  " style={{ background: '#000000', boxShadow: 'none' }}>
                <img src={image} className="image" alt="splash" style={{ position: 'fixed', zIndex: '-1000', top: '0', left: '0', filter: 'grayscale(30%) blur(0px)', minHeight: '100vh', minWidth: '100vw' }} />
            </div>
        </div>

    )
}

export default Splash;