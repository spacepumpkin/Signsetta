import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container.js';
// import TweetsContainer from './tweets/tweets_container';
// import MainPage from './main/main_page';
import CategoryShowContainer from './categories/category_show_container';
import CategoryIndexContainer from './categories/categories_index_container';
import CardIndexContainer from './card/card_index_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';

import CategoriesIndex from './categories/categories_index_container';
import CardShowContainer from './card/card_show_container';
import SplashComponent from './splash/splash';
import FSGameContainer from './card/fs_game_container';

import About from './about/about';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={SplashComponent} />
      <Route exact path="/about" component={About} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/cards" component={CardIndexContainer} />
      <ProtectedRoute exact path="/categories/:catId" component={CategoryShowContainer} />
      <ProtectedRoute exact path="/categories" component={CategoryIndexContainer} />

      <ProtectedRoute exact path="/categories" component={CategoriesIndex} />

      <ProtectedRoute exact path="/fingerspelling-game" component={FSGameContainer} />

      <ProtectedRoute exact path="/cards/:cardId" component={CardShowContainer} />
      <ProtectedRoute exact path="/cards" component={CardIndexContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

export default App;