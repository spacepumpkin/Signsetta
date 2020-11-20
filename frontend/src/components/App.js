import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container.js';
import CategoryShowContainer from './categories/category_show_container';
// import CategoryIndexContainer from './categories/categories_index_container';
import CardIndexContainer from './card/card_index_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';

// import CategoriesIndex from './categories/categories_index_container';
import CardShowContainer from './card/card_show_container';
import SplashComponent from './splash/splash';
import FSGameContainer from './card/fs_game_container';

import About from './about/about';
import TranslatorContainer from './translator/translator_container'


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/about" component={About} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/translator" component={TranslatorContainer} />

      <ProtectedRoute exact path="/cards" component={CardIndexContainer} />
      <ProtectedRoute exact path="/categories/:catId" component={CategoryShowContainer} />
    

      <ProtectedRoute exact path="/fingerspelling-game" component={FSGameContainer} />

      <ProtectedRoute exact path="/cards/:cardId" component={CardShowContainer} />
      <ProtectedRoute exact path="/cards" component={CardIndexContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <Route exact path="/" component={SplashComponent} />
      <Redirect to="/" />
      {/* <Route render={() => <Redirect to="/" />} /> */}
    </Switch>
  </div>
);

export default App;