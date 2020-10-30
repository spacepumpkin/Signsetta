import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'
import { Icon, Segment, Button, Grid} from  'semantic-ui-react'
import '../../index'

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
                <Segment inverted >
                        <Link to={'/categories'}><Button color='red'>Return to all categories</Button></Link>
                        <Link to={'/profile'}><Button color='yellow'>Profile</Button></Link>
                        <Link to={'/cards'}>Cards</Link>
                        <Button color='violet' onClick={this.logoutUser}>Logout</Button>
                </Segment>
            );
        } else {
            return (
                <Segment inverted >
                     
                                <Link to={'/signup'}><Button color='blue'>Signup</Button></Link>

                                <Link to={'/login'}><Button color='green'>Login</Button></Link>
                           
                </Segment> 
            );
        }
    }

    render() {
        return (
            <Segment inverted color="orange">
                    <h1>Welcome to Signsetta!</h1>
                    <Grid>
                            <Grid.Column textAlign="right">
                                    { this.getLinks()}
                            </Grid.Column>
                    </Grid>
                
            </Segment>
        );
    }
}

export default NavBar;