import React from 'react';
import { Link } from 'react-router-dom'
import '../../index';
import logo from '../../images/mern-logo-1.png';
import './navbar.css';

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
                    <div id="aboutus" className="ui compact menu">
                        <Link to={'/about'} className="item">
                            <div>
                                <i className="icon users"></i>
                                About Us
                            </div>
                        </Link>
                    </div>

                    <div className="item" >
                        <Link to={'/fingerspelling-game'}>
                            <div className="ui button olive">Fingerspelling Practice</div>
                        </Link>
                    </div>

                    <div className="item" >
                        <Link to={'/categories'}>
                            <div className=" ui button pink">Learning Subjects</div>
                        </Link>
                    </div>

                    <div className="item" >
                        <Link to={'/profile'}>
                            <div className=" ui button violet">Profile</div>
                        </Link>
                    </div>

                    <div className="item" >
                        <Link to={'/cards'}>
                            <div className=" ui button blue">
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

                    <div id="aboutus" className="ui compact menu" >
                        <Link to={'/about'} className="item">
                            <div>
                                <i className="icon users"></i>
                                About Us
                            </div>
                        </Link>
                    </div>

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

        return (
            <div className="ui stackable menu">
                <Link to="/">
                    <img src={logo} className="image" alt="logo" height="80" />
                </Link>
                { this.getLinks()}
            </div>
        )


    }
}

export default NavBar;