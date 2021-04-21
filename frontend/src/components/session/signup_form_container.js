import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSP = (state) => ({
  // isAuthenticated: state.session.isAuthenticated,
  isAuthenticated: state.session.isAuthenticated,
  errors: state.errors.session
});

const mDP = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mSP, mDP)(SignupForm);