import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'
import { Button } from  'semantic-ui-react'
import '../../index'
import logo from '../../images/mern-logo-1.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="right menu" >
                    <div className="item" >
                        <Link to={'/categories'}>
                            <div className=" ui button pink">Return to all categories</div>
                        </Link>
                    </div>

                    <div className="item" >
                        <Link to={'/profile'}>  
                                <div className=" ui button blue">Profile</div>                       
                        </Link>
                    </div>

                    <div className="item" >
                        <Link to={'/cards'}>
                            <div className=" ui button teal">
                                Cards
                            </div>
                        </Link>
                    </div>

                    <div className="item" >
                        <div className=" ui button teal" onClick={this.logoutUser}>
                            Logout
                        </div>
                    </div>
                </div> 
            );
        } else {
            return (
                
                <div className="right menu" >  

                    <div className="item" >
                        <Link to={'/signup'}><div className="ui button pink">Signup</div></Link>
                    </div>
                    <div className="item" >
                        <Link to={'/login'}><div className=" ui button teal">Login</div></Link>
                    </div>
                </div> 
            );
        }
    }

    render() {
      
        
    
            
                return(
                <div className="ui stackable menu">
                    <Link to="/">
                        <img src={logo} className="image" alt="logo" height="80"/>
                    </Link>
                    { this.getLinks()}
                </div>
                )
           
      
    }
}

export default NavBar;