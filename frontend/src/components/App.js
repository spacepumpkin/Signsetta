import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container.js';
// import TweetsContainer from './tweets/tweets_container';
// import MainPage from './main/main_page';
import CategoryIndexContainer from './categories/categories_index_container';
import CardIndexContainer from './card/card_index_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';

// import TweetComposeContainer from './tweets/tweets_compose_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/cards" component={CardIndexContainer}/>
      <ProtectedRoute exact path ="/categories" component={CategoryIndexContainer} />
      
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;