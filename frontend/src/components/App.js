import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container.js';
// import TweetsContainer from './tweets/tweets_container';
// import MainPage from './main/main_page';
import CategoryIndexContainer from './categories/categories_index_container';
import CardIndexContainer from './card/card_index_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';

import CategoriesIndex from './categories/categories_index_container';
import CardShowContainer from './card/card_show_container';
import SplashComponent from './splash/splash';
import FSGameContainer from './card/fs_game_container';


const App = () => (
  <div>

    <NavBarContainer />
      <AuthRoute exact path="/" component={SplashComponent} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/categories" component={CategoriesIndex}/>
      <Route exact path="/fingerspelling-game" component={FSGameContainer} />

      <ProtectedRoute exact path="/cards/${cardId}" component={CardShowContainer}/>
      <ProtectedRoute exact path="/cards" component={CardIndexContainer}/>

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;