import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSP = (state) => ({
  // isAuthenticated: state.session.isAuthenticated,
  isAuthenticated: state.session.isAuthenticated,
  errors: state.errors.session
});

const mDP = (dispatch) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mSP, mDP)(SignupForm);